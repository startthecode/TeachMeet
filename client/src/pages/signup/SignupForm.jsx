import React from "react";
import { Input } from "../../components/ui/Input";
import { form_validatiions } from "../../constant/form_validatiions";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/Button";

export const SignupForm = () => {
  let {
    register,
    setError,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  let validations = form_validatiions();
  let formCSS = {
    className: " mt-10",
  };
  return (
    <form {...formCSS} onSubmit={handleSubmit(() => console.log("aa"))}>
      <Input
        label="Name"
        {...register("name", validations("name", "name"))}
        error={errors?.name?.message}
      />
      <Input
        label="Email"
        {...register("email", validations("email", "email"))}
        error={errors?.email?.message}
      />
      <Input
        label="Password"
        {...register("password", validations("password", "password"))}
        error={errors?.password?.message}
      />
      <Button text="Create Account" />
    </form>
  );
};
