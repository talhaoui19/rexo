"use client";

import { User } from "@/types/User";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

type Props = {
  user: User;
};
const UpdateForm = ({ user }: Props) => {
  const router = useRouter();

  const [firstName, setFirstName] = useState<string>(user?.firstName || "");
  const [lastName, setLastName] = useState<string>(user?.lastName || "");
  const [bio, setBio] = useState<string>(user?.bio);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmitUpdate = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/profile/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          bio,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        toast.error(data.error || "Update failed.");
        return;
      } else {
        setIsLoading(false);
        toast.success("Profile updated successfully!");
        router.push("/profile");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
      setIsLoading(false);
    }

    router.refresh();
  };
  return (
    <form onSubmit={handleSubmitUpdate} className="w-full mb-1">
      <div className="w-full flex items-center gap-2 justify-between">
        <input
          className="--input w-[49%] mb-3"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(eo) => {
            setFirstName(eo.target.value);
          }}
        />
        <input
          className="--input  w-[49%] mb-3"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(eo) => {
            setLastName(eo.target.value);
          }}
        />
      </div>

      <div className="--input mb-3 flex items-center justify-between cursor-pointer text-[#318cef] ">
        <a href="/profile/update_password" className="pl-2 select-none">
          Change Password
        </a>
      </div>

      <textarea
        className="w-full h-[13em] --input resize-none"
        placeholder="Your Bio"
        value={bio}
        onChange={(eo) => {
          setBio(eo.target.value);
        }}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md --but flex justify-center"
      >
        {isLoading ? <div className="--spr"></div> : <>Save changes</>}
      </button>
    </form>
  );
};

export default UpdateForm;
