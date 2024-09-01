export const form_validatiions = () => {
  function name_validation(name) {
    return {
      required: `${name} cannot be empty`,
      pattern: {
        value: /([a-zA-Z0-9_\s]+)/g,
        message: `${name} only contains strings`,
      },
    };
  }

  function email_validation(email) {
    return {
      required: `${email} cannot be empty`,
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: `${email} only contains strings`,
      },
    };
  }

  function password_validation(password) {
    return {
      required: `${password} cannot be empty`,
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message: `${password} only contains strings`,
      },
    };
  }

  function addValidation(name, validation_type) {
    switch (validation_type) {
      case "name":
        return name_validation(name);
      case "email":
        return email_validation(name);
      case "password":
        return password_validation(name);
      default:
        return name_validation(name);
    }
  }

  return addValidation;
};
