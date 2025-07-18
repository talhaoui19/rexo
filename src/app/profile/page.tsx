import { ProfileCard } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import type { AuthOptions } from "next-auth";
import type { Session } from "next-auth";

export default async function Page() {
  const session: Session | null = await getServerSession(
    authOptions as AuthOptions
  );

  if (!session) {
    redirect("/");
  }

  return (
    <section className="w-full mt-[6em] select-none z-10">
      <div className="w-full flex justify-center">
        <ProfileCard />
      </div>
    </section>
  );
}
