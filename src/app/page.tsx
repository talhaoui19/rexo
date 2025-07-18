import { StartPage } from "@/components";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession, type AuthOptions } from "next-auth";
import type { Session } from "next-auth";

const Page = async () => {
  const session: Session | null = await getServerSession(
    authOptions as AuthOptions
  );

  if (session) {
    redirect("/profile");
  } else {
    return <StartPage />;
  }
};

export default Page;
