import React from "react";
import { Signup_header } from "./Signup_header";
import { SignupForm } from "./SignupForm";
import { Divider } from "../../components/ui/Divider";
import { Auth_other_logins } from "./Auth_other_logins";

let SignUP = () => {
  return <>
  <Signup_header/>
  <SignupForm/>
  <Divider spacing={"xl:mt-18 lg:mt-10 lg:mb-[3rem] mb-8 xl:mb-20 max-w-[90%] mx-auto"} />
  <Auth_other_logins />

  </>;
};

export default SignUP;
