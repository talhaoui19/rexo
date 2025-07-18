import RegisterForm from "./RegisterForm";

const RegisterCard = () => {
  return (
    <div className="w-[25em] px-6 --crd rounded-md overflow-hidden">
      <div className="w-full text-center flex justify-center items-center h-[8em]">
        <div className="text-center">
          <h4 className="text-3xl text-neutral-900 font-bold uppercase">
            SignUp
          </h4>
          <span className="text-sm text-neutral-500 ">
            It’s quick and easy.
          </span>
        </div>
      </div>

      <div className="w-full p-3 mb-5">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterCard;
