import { User } from "@/types/User";
import ProfileUpdateForm from "./ProfileUpdateForm";

type Props = {
  user: User;
};

export default async function Page({ user }: Props) {
  return (
    <div className="w-[33em] --crd p-3">
      <div className="w-full flex justify-center ">
        <h3 className="text-2xl font-medium text-neutral-900 uppercase mb-3">
          Edit Info
        </h3>
      </div>

      <ProfileUpdateForm user={user} />
    </div>
  );
}
