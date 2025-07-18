import { NextRequest, NextResponse } from "next/server";
import { ConnectToDb } from "@/lib/db";
import UserModel from "@/lib/models/user";
import crypto from "crypto";
import sgMail from "@sendgrid/mail";
import ResetPasswordTemplate from "@/lib/emails/ResetPasswordTemplate";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    await ConnectToDb();

    const user = await UserModel.findOne({ email });
    if (!user)
      return NextResponse.json({ error: "No user found" }, { status: 404 });

    const token = crypto.randomBytes(32).toString("hex");
    const expires = Date.now() + 3600000;

    user.resetToken = token;
    user.resetTokenExpiry = expires;
    await user.save();

    const resetLink = `${process.env.NEXTAUTH_URL}/reset_password?token=${token}&email=${email}`;

    const msg = {
      to: email,
      from: process.env.SENDGRID_SENDER!,
      subject: "Reset your password",
      html: ResetPasswordTemplate(resetLink),
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Reset link sent to your email." });
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error("SendGrid error", err.message || error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
