"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";
import Link from "next/link";

const SigninForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const handelsubmitSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.ok) {
        setIsLoading(false);
        toast.success("Successfully signed in !");
        router.push("/");
        router.refresh();
        return;
      }

      if (res?.error) {
        setIsLoading(false);
        setError("The email of password is wrong !");
        console.log(error);
        return;
      }
    } catch (err) {
      setIsLoading(false);
      setError("Something want wrong !");
      console.log(err);
      return;
    }
  };

  return (
    <>
      <form onSubmit={handelsubmitSignIn}>
        <div className="first-name-input relative">
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

        <div className="password-name-input relative">
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

        <Link
          href="/forget_password"
          className="block text-sm text-blue-500 text-end hover:underline"
        >
          Forget Password ?
        </Link>

        {error ? (
          <div className="full my-2 py-2 px-3 rounded-md bg-red-200 text-sm text-red-700">
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
            {isLoading ? <div className="--spr"></div> : <>Sign in</>}
          </button>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
