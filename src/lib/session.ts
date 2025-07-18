import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ConnectToDb } from "@/lib/db";
import UserModel from "@/lib/models/user";

import type { Session } from "next-auth";
import type { AuthOptions } from "next-auth";
import { User } from "@/types/User";

export async function getUserFromSession(): Promise<User | null> {
  const session: Session | null = await getServerSession(
    authOptions as AuthOptions
  );

  if (!session || !session.user?.email) return null;

  await ConnectToDb();

  const user = (await UserModel.findOne({
    email: session.user.email,
  }).lean()) as User | null;

  return user;
}
