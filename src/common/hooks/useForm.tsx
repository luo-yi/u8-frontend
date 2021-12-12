import { useState, useEffect } from 'react';

function useForm<T extends object>(initialState: T, validate: (values: T, touched: any) => any) {
  const [form, setForm] = useState({
    values: initialState,
    touched: {},
  });

  const [formErrors, setFormErrros] = useState({
    errors: {},
    isValid: false,
  });

  const { values, touched } = form;
  const { errors, isValid } = formErrors;

  const validateEffect = () => {
    const results = validate(values, touched);
    setFormErrros({
      errors: results.errors,
      isValid: results.isValid,
    });
  };

  useEffect(validateEffect, []);
  useEffect(validateEffect, [values, touched]);

  const onChange = (e: any) => {
    setForm((obj) => ({
      values: {
        ...obj.values,
        [e.target.name]: e.target.value,
      },
      touched: {
        ...obj.touched,
        [e.target.name]: true,
      },
    }));
  };

  const reset = () => {
    setForm({
      values: initialState,
      touched: {},
    });
  };

  return {
    values, touched, errors, isValid, reset, onChange,
  };
}

export default useForm;
