import Link from "next/link";
import SigninForm from "./SigninForm";

const Page = () => {
  return (
    <div className="w-[23em] px-6 --crd rounded-md overflow-hidden">
      <div className="w-full text-center flex justify-center items-center h-[8em]">
        <div className="text-center">
          <h4 className="text-3xl text-neutral-900 font-bold uppercase">
            SignIn
          </h4>
          <span className="text-sm text-neutral-500 ">
            Be one of the family
          </span>
        </div>
      </div>

      <div className="w-full p-3 mb-5">
        <SigninForm />

        <div className="w-full my-2 mb-6">
          <p className="text-sm text-neutral-900">
            You don&apos;t have an account ? you can{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              register
            </Link>
          </p>
        </div>

        {/* <div className="w-full border-neutral-200 border-t-2 border-solid my-3"></div> */}

        {/* <SocialLoginButtons /> */}
      </div>
    </div>
  );
};

export default Page;
