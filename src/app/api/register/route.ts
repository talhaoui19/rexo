import { ConnectToDb } from "@/lib/db";
import UserModel from "@/lib/models/user";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const e = await req.json();
    await ConnectToDb();
    const existingUser = await UserModel.findOne({ email: e.email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already registered." },
        { status: 409 }
      );
    }
    const user_password = await bcrypt.hash(e.password, 10);
    const userData = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      password: user_password,
      bio: e.bio || "",
      createdAt: new Date(),
    };
    const newUser = new UserModel(userData);
    await newUser.save();
    return NextResponse.json(
      { message: "User created successfully." },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ e }, { status: 500 });
  }
}
