"use client";

import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

const RegisterForm = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const handleSubmitRegister = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!firstName || !lastName || !email || !password) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (!strongPasswordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      setIsLoading(false);
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        bio,
      }),
    });

    const data = await res.json();

    if (res?.ok) {
      setIsLoading(false);
      toast.success("Account created successfully!");
      router.push("/signin");
      router.refresh();
      return;
    }

    if (!res.ok) {
      setError(data.error || "Something went wrong");
      setIsLoading(false);
      return;
    }
  };
  return (
    <form onSubmit={handleSubmitRegister}>
      <div className="first-name-input relative">
        <input
          className={`--input w-full mb-3 ${
            !firstName && buttonClicked ? "border-[red]" : ""
          }`}
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(eo) => {
            setFirstName(eo.target.value);
          }}
        />
        {!firstName && buttonClicked ? (
          <FontAwesomeIcon
            className="fa-solid fa-circle-exclamation text-[#b94a48] text-[20px] absolute top-[13px] right-[10px]"
            icon={faCircleExclamation}
          />
        ) : (
          ""
        )}
      </div>

      <div className="last-name-input relative">
        <input
          className={`--input w-full mb-3 ${
            !lastName && buttonClicked ? "border-[red]" : ""
          }`}
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(eo) => {
            setLastName(eo.target.value);
          }}
        />
        {!lastName && buttonClicked ? (
          <FontAwesomeIcon
            className="fa-solid fa-circle-exclamation text-[#b94a48] text-[20px] absolute top-[13px] right-[10px]"
            icon={faCircleExclamation}
          />
        ) : (
          ""
        )}
      </div>

      <div className="email-input relative">
        <input
          className={`--input w-full mb-3 ${
            !email && buttonClicked ? "border-[red]" : ""
          }`}
          type="email"
          placeholder="Email"
          value={email}
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
      <div className="password-input relative">
        <input
          className={`--input w-full mb-3 ${
            !password && buttonClicked ? "border-[red]" : ""
          }`}
          type="password"
          placeholder="Password"
          value={password}
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

      <div className="bio-input relative">
        <textarea
          name="bio"
          placeholder="Your Bio"
          rows={5}
          className="--input w-full mb-3"
          value={bio}
          onChange={(eo) => {
            setBio(eo.target.value);
          }}
        ></textarea>
      </div>

      {error ? (
        <div className="full py-2 px-3 rounded-md bg-red-200 text-sm text-red-700">
          {error}
        </div>
      ) : (
        <></>
      )}

      <div className="w-full justify-center mt-3">
        <button
          disabled={isLoading}
          type="submit"
          className="--but w-full flex justify-center rounded-md"
          onClick={() => {
            setButtonClicked(true);
          }}
        >
          {isLoading ? <div className="--spr"></div> : <>Sign up</>}
        </button>
      </div>

      <div className="w-full my-2 ">
        <p className="text-sm text-neutral-900">
          You have an account ? you can{" "}
          <Link href="/signin" className="text-blue-500 hover:underline">
            sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
