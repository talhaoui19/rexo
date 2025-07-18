import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Page = () => {
  return (
    <div className={poppins.className}>
      <section className="w-full mt-[6em] sm:mt-[8em] select-none">
        <div className="w-full my-10 sm:px-2 flex justify-center flex-col gap-y-3 sm:gap-8  items-center"></div>
      </section>
    </div>
  );
};

export default Page;
