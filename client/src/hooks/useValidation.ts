import { useState } from 'react';

const useFormValidation = (initialState:any) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (event:any,fn?:any) => {
    event.preventDefault();
    const err=validate(values)
    setErrors(err);
    fn(err)
    setIsSubmitting(true);
  };

  const validate = (values:any) => {
    let errors:any = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    Object.keys(values).forEach((key) => {
        if (!values[key]) {
          errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        }
      });

    return errors;
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting
  };
};

export default useFormValidation;
