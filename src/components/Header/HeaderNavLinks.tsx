import { getUserFromSession } from "@/lib/session";
import SignOutButton from "./SignOutButton";
import { User } from "@/types/User";

const HeaderNavLinks = async () => {
  const user: User | null = await getUserFromSession();

  return (
    <nav className="flex gap-3 items-center">
      {user && (
        <>
          <SignOutButton />
          {/* <a className="--but" href="/postit">
            Add post
          </a> */}
          <a
            href={"/profile"}
            className="w-10 h-10 rounded-full cursor-pointer bg-neutral-800 flex justify-center items-center"
          >
            <div className="text-xl text-blue-50  font-bold uppercase ">
              {user ? user.firstName.split("")[0] : "U"}
            </div>
          </a>
        </>
      )}
      {!user && (
        <>
          <a className="--but-out" href="/register">
            Register
          </a>
          <a className="--but" href="/signin">
            Sign in
          </a>
        </>
      )}
    </nav>
  );
};

export default HeaderNavLinks;
