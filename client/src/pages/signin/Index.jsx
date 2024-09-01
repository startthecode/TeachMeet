import React from "react";
import { AuthBlock } from "../../components/ui/AuthBlock";
import { SigninForm } from "./SigninForm";
import { AuthSwitch } from "../../components/ui/AuthSwitch";
import { Signin_header } from "./SignIn_header";
import { Auth_other_logins } from "./Auth_other_logins";
import { Link } from "react-router-dom";
import { Divider } from "../../components/ui/Divider";

const Signin = () => {
  return (
    <>
      <Signin_header />
      <SigninForm />
      <Divider spacing={"xl:mt-12 lg:mb-20 mb-8 max-w-[90%] mx-auto"} />
      <Auth_other_logins />
    </>
  );
};
export default Signin;
