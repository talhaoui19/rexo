"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const SocialLoginButtons = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div className="w-full rounded-md cursor-pointer bg-blue-500 py-3 flex justify-center text-base text-white font-bold mb-2">
        <button
          disabled={isLoading}
          onClick={() => {
            signIn("google", { callbackUrl: "/" });
            setIsLoading(true);
          }}
        >
          {isLoading ? (
            <div className="--spr border-white border-r-transparent"></div>
          ) : (
            <>Continue with Google</>
          )}
        </button>
      </div>
      {/* <div className="w-full rounded-md cursor-pointer bg-blue-800 py-3 flex justify-center text-base text-white font-bold mb-2">
        Continue with Facebook
      </div>
      <div className="w-full rounded-md cursor-pointer bg-gray-900 py-3 flex justify-center text-base text-white font-bold">
        Continue with GitHub
      </div> */}
    </div>
  );
};

export default SocialLoginButtons;
