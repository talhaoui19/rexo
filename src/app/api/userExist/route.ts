import { ConnectToDb } from "@/lib/db";
import UserModel from "../../../lib/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await ConnectToDb();

    const user = await UserModel.findOne({ email }).select("-password");

    if (!user) {
      return NextResponse.json(
        { exists: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      exists: true,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error in /api/userExist:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
