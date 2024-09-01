import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { urls } from "../../constant/urls";

export const Auth_other_logins = ({ text }) => {
  return (
    <>
      <div className="flex justify-center gap-2 mb-4 flex-wrap">
        <div className="googleLogin flex items-center border-[0.1rem] border-slate-200 p-[0.4rem] px-3 hover:bg-slate-100 ease-linear cursor-pointer lg:w-auto w-[100%] justify-center">
          <Icon className="mr-2" icon="flat-color-icons:google" height={25} />
          <span className="text-[0.8rem]">Sign in with Google</span>
        </div>
        <div className="appleLogin flex items-center border-[0.1rem] border-slate-200 p-[0.4rem] px-3 hover:bg-slate-100 ease-linear cursor-pointer lg:w-auto w-[100%] justify-center">
          <Icon className="mr-2" icon="logos:apple" height={23} />
          <span className="text-[0.8rem]"> Sign in with Apple</span>
        </div>
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <Link
          to={urls.auth.signin.link}
          className="text-clr_primary font-medium underline"
        >
          {" "}
          Sign in
        </Link>
      </p>
    </>
  );
};
