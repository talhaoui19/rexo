"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";
import { FormEvent, useState } from "react";

const PasswordUpdateForm = () => {
  const router = useRouter();

  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const PasswordUpdateHandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/user/update_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong.");
        setIsLoading(false);
      } else {
        toast.success("Password updated successfully.");
        setIsLoading(false);
        router.refresh();
        router.push("/profile");
      }
    } catch (error) {
      console.log("Eroor:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={PasswordUpdateHandleSubmit} className="w-full mb-1">
      <div className="relative">
        <input
          className={`--input w-full mb-3 ${
            !currentPassword && buttonClicked ? "border-[red]" : ""
          }`}
          type="password"
          placeholder="Current password"
          onChange={(eo) => {
            setCurrentPassword(eo.target.value);
          }}
        />
        {!currentPassword && buttonClicked ? (
          <FontAwesomeIcon
            className="fa-solid fa-circle-exclamation text-[#b94a48] text-[20px] absolute top-[13px] right-[10px]"
            icon={faCircleExclamation}
          />
        ) : (
          ""
        )}
      </div>
      <div className="relative">
        <input
          className={`--input w-full mb-3 ${
            !newPassword && buttonClicked ? "border-[red]" : ""
          }`}
          type="password"
          placeholder="New password"
          onChange={(eo) => {
            setNewPassword(eo.target.value);
          }}
        />
        {!newPassword && buttonClicked ? (
          <FontAwesomeIcon
            className="fa-solid fa-circle-exclamation text-[#b94a48] text-[20px] absolute top-[13px] right-[10px]"
            icon={faCircleExclamation}
          />
        ) : (
          ""
        )}
      </div>
      <div className="relative">
        <input
          className={`--input w-full mb-3 ${
            !confirmNewPassword && buttonClicked ? "border-[red]" : ""
          }`}
          type="password"
          placeholder="Confirm new password"
          onChange={(eo) => {
            setConfirmNewPassword(eo.target.value);
          }}
        />
        {!confirmNewPassword && buttonClicked ? (
          <FontAwesomeIcon
            className="fa-solid fa-circle-exclamation text-[#b94a48] text-[20px] absolute top-[13px] right-[10px]"
            icon={faCircleExclamation}
          />
        ) : (
          ""
        )}
      </div>
      {error ? (
        <div className="full py-2 px-3 rounded-md bg-red-200 text-sm text-red-700">
          {error}
        </div>
      ) : (
        <></>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md --but flex justify-center mt-3"
        onClick={() => {
          setButtonClicked(true);
        }}
      >
        {isLoading ? <div className="--spr"></div> : <> Update password</>}
      </button>
    </form>
  );
};

export default PasswordUpdateForm;
