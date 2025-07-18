import { ConnectToDb } from "@/lib/db";
import UserModel from "@/lib/models/user";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, token, password } = await req.json();

    await ConnectToDb();

    const user = await UserModel.findOne({ email, resetToken: token });

    if (!user || user.resetTokenExpiry < Date.now()) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Reset Password Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
