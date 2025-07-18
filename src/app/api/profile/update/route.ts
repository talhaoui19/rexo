import { ConnectToDb } from "@/lib/db";
import User from "@/lib/models/user";
import { AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

interface UpdateUserRequestBody {
  firstName?: string;
  lastName?: string;
  bio?: string;
}
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions as AuthOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await ConnectToDb();
    const body: UpdateUserRequestBody = await req.json();

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        $set: {
          firstName: body.firstName,
          lastName: body.lastName,
          bio: body.bio,
          updatedAt: new Date(),
        },
      },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
