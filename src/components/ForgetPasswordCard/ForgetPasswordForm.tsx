"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export const ForgetPasswordForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const ForgetPasswordHandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      setError("Email is required");
      setIsLoading(false);
      return;
    }

    const res = await fetch("/api/user/forget_password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success(data.message || "Check your email!");
      setIsLoading(false);
      router.push("/");
    } else {
      toast.error(data.error || "Something went wrong.");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={ForgetPasswordHandleSubmit} className="w-full mb-1">
      <div className="email-input relative">
        <input
          className={`--input w-full mb-3 ${
            !email && buttonClicked ? "border-[red]" : ""
          }`}
          type="email"
          placeholder="Email"
          onChange={(eo) => {
            setEmail(eo.target.value);
          }}
        />

        {!email && buttonClicked ? (
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
        {isLoading ? <div className="--spr"></div> : <> Send</>}
      </button>
    </form>
  );
};
