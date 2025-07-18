import Link from "next/link";

const Index = () => {
  return (
    <section className="w-full mt-[12em] ">
      <div className="w-full flex justify-center">
        <h2 className="w-[56%] md:w-[64%] sm:w-[85%] text-5xl md:text-7xl text-center uppercase font-extrabold text-[#318cef]">
          <span className="text-neutral-950">REXO</span> Is Your Home To Post{" "}
          <Link
            href={"/signin"}
            className="text-neutral-900 hover:text-neutral-950"
          >
            Start Posting Now
          </Link>
        </h2>
      </div>
    </section>
  );
};

export default Index;
