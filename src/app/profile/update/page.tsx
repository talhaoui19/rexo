import { ProfileUpdateCard } from "@/components";
import { getUserFromSession } from "@/lib/session";
import { User } from "@/types/User";

export default async function Page() {
  const user: User | null = await getUserFromSession();

  if (!user) {
    return <p className="flex items-center">Unauthorized</p>;
  }

  return (
    <section className="w-full mt-[6em] select-none z-10">
      <div className="w-full flex justify-center">
        <ProfileUpdateCard user={user} />
      </div>
    </section>
  );
}
