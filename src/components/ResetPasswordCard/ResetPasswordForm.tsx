"use client";

import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const ResetPasswordHandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!password || !confirmPassword) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const res = await fetch("/api/user/reset_password", {
      method: "POST",
      body: JSON.stringify({ email, token, password }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Password reset successful.");
      setIsLoading(false);
      router.push("/signin");
    } else {
      toast.error(data.error || "Something went wrong.");
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={ResetPasswordHandleSubmit} className="w-full mb-1">
      <div className="relative">
        <input
          className={`--input w-full mb-3 ${
            !password && buttonClicked ? "border-[red]" : ""
          }`}
          type="password"
          placeholder="New password"
          onChange={(eo) => {
            setPassword(eo.target.value);
          }}
        />
        {!password && buttonClicked ? (
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
            !confirmPassword && buttonClicked ? "border-[red]" : ""
          }`}
          type="password"
          placeholder="Confirm new password"
          onChange={(eo) => {
            setConfirmPassword(eo.target.value);
          }}
        />

        {!confirmPassword && buttonClicked ? (
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
        {isLoading ? <div className="--spr"></div> : <> Reset Password</>}
      </button>
    </form>
  );
};

export default ResetPasswordForm;
