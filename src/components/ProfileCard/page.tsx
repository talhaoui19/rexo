import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { getUserFromSession } from "@/lib/session";
import { User } from "@/types/User";

const Page = async () => {
  const user: User | null = await getUserFromSession();
  return (
    <>
      <div className="w-[37em] md:w-[68em] mb-4 xl:mt-6 2xl:mt-7 sm:px-4">
        <div className="w-full --crd rounded-xl p-4 mb-3">
          <div
            className="w-full h-[9em] sm:h-[16em] rounded-xl z-10 relative flex justify-center items-start sm:items-center"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(6, 182, 212), rgb(59, 130, 246))",
            }}
          >
            <h3 className="text-3xl text-neutral-950 text-opacity-40 sm:mt-8">
              {"@" +
                [user?.firstName, user?.lastName]
                  .filter(Boolean)
                  .map((word) => (word as string).toLowerCase())
                  .join("_")}
            </h3>
            <div className="absolute right-2 bottom-2 sm:right-3 sm:bottom-3 flex justify-center items-center">
              <a href="/profile/update">
                {" "}
                <i className="text-2xl sm:text-xl  fill-black opacity-40 transition-colors cursor-pointer hover:opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path>
                  </svg>
                </i>
              </a>
            </div>
          </div>
          <div className="w-full flex gap-2 px-4 md:px-6 sm:justify-center justify-start py-2 pb-4 mt-[5px]">
            <div
              className="w-[12em] h-[12em] sm:w-[8em] sm:h-[8em] flex justify-center items-center z-20 shadow-md rounded-full mt-[-8em] sm:mt-[-4em] cursor-pointer"
              style={{ backgroundColor: "rgb(38 38 38 / 1" }}
            >
              <h5 className="text-7xl text-blue-50 font-bold uppercase">
                {" "}
                {user?.firstName.split("")[0]}
              </h5>
            </div>
            <div className="w-[80%] sm:w-[74%] flex sm:justify-between justify-center flex-col sm:flex-row items-center">
              <div className="sm:mb-3 justify-start mt-[8px]">
                <h2 className="text-[2.7em] sm:text-3xl text-neutral-800 font-medium flex items-center gap-2">
                  {`${user?.firstName || ""} ${user?.lastName || ""}`}

                  <div className="bg-[#19a4e0] text-white w-[20px] h-[20px] flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      className="fa-solid fa-check "
                      icon={faCheck}
                      style={{ width: "12px" }}
                    />
                  </div>
                </h2>
                <div className="my-[3px]">
                  <span className="bg-[#19a4e0] text-white text-[14px] py-[2px] px-[12px] rounded-full">
                    Pro Member
                  </span>
                </div>
                <p className="text-lg max-w-[400px] text-neutral-500">
                  {user?.bio}
                </p>
              </div>
              <div>
                {/* <a className="--but py-1 sm:text-xl block" href="/postit">
                  Post
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
