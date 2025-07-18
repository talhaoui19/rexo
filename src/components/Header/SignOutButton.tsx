"use client";

import { signOut } from "next-auth/react";

const SignoutButton = () => {
  return (
    <div>
      <button
        className="--but-out"
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default SignoutButton;
