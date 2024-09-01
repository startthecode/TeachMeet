import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  let { size = "sm", variant = "primary", label, error, ...restProps } = props;
  let sizes = {
    sm: "",
    md: "",
    lg: "",
    xl: "",
  };

  let variants = {
    primary: "",
    secondary: "",
    tertiary: "",
  };
  return (
    <div className="xl:pb-5 lg:pb-5 pb-3 relative">
      <label for="first_name" class="block mb-1 text-sm text-gray-900">
        {label}
      </label>
      <input
        ref={ref}
        {...restProps}
        class="bg-gray-50 border-[1px] border-gray-300 text-gray-900 text-sm  outline-none focus:border-clr_primary block w-full p-2.5  "
      />
      <p className="text-red-400 font-light">{error}</p>
    </div>
  );
});
