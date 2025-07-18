import PasswordUpdateForm from "./PasswordUpdateForm";

const Page = () => {
  return (
    <div className="w-[30em] --crd p-3">
      <div className="w-full flex justify-center ">
        <h3 className="text-2xl font-medium text-neutral-900 uppercase mb-3">
          Edit Password
        </h3>
      </div>

      <div className="p-7">
        <PasswordUpdateForm />
      </div>
    </div>
  );
};

export default Page;
