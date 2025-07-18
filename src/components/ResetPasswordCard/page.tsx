import ResetPasswordForm from "./ResetPasswordForm";

export const ResetPasswordCard = () => {
  return (
    <div className="w-[30em] --crd p-3">
      <div className="w-full flex justify-center ">
        <h3 className="text-2xl font-medium text-neutral-900 uppercase mb-3">
          Reset Password
        </h3>
      </div>

      <div className="p-7">
        <ResetPasswordForm />
      </div>
    </div>
  );
};
