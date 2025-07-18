import Link from "next/link";
import HeaderNavLinks from "./HeaderNavLinks";

const Page = () => {
  return (
    // START HEADER COMPONENT
    <div className="header w-full fixed flex  justify-between items-center top-0 left-0 py-3 p-8 z-40 bg-neutral-500 bg-opacity-10 backdrop-blur-md border-solid border-neutral-100 border-opacity-10 border-b-[1px]">
      <Link className="text-3xl select-none text-white font-bold " href="/">
        R<span className="text-neutral-800">EXO</span>
        <span className="text-blue-600"></span>
      </Link>
      <HeaderNavLinks />
    </div>
    // END HEADER COMPONENT
  );
};

export default Page;
