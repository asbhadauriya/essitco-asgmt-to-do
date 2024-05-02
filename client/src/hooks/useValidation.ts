import { useState } from "react";

function useFormValidation(initialState: any, removeErrorFields: any = []) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateField = (name: any, value: any) => {
    let error = null;
    if (!value) {
      return (error = "This field is required");
    }

    // Validation logic based on field name
    switch (name) {
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "mailAlias":
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Mail aliaa should be an email";
        }
        break;
      case "password":
        if (value.length < 8) {
          error = "Password must be at least 8 characters long";
        }
        break;
      case "number":
        if (isNaN(value)) {
          error = "Please enter a valid number";
        }
        case "confirmPassword":
          if (value!=values.password) {
            error = "Password doesn't Match";
          }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e: any, fun: any) => {
    e.preventDefault();
    const newErrors: any = {};

    // Validate all fields
    Object.entries(values).forEach(([name, value]) => {
      if (!removeErrorFields || !removeErrorFields.includes(name)) {
        const error = validateField(name, value);
        if (error) {
          newErrors[name] = error;
        }
      }
    });

    setErrors(newErrors);
    if (!Object.keys(newErrors).length && fun) {
      // Assuming addEmployee doesn't take any arguments
      fun(newErrors);
    } else {
      console.log(newErrors);
    }
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useFormValidation;
