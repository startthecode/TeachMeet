import { useForm } from "react-hook-form";
import { Input } from "../../components/ui/Input";
import { form_validatiions } from "../../constant/form_validatiions";
import { Button } from "../../components/ui/Button";

export const SigninForm = () => {
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
        label="Email"
        {...register("email", validations("email", "email"))}
        error={errors?.email?.message}
      />
      <Input
        label="Password"
        {...register("password", validations("password", "password"))}
        error={errors?.password?.message}
      />
      <Button text="Signin" />
    </form>
  );
};
