import { useState, useEffect } from 'react';
import { OnChangeEvent } from '../interfaces';

function useForm<T extends object>(initialState: T, validate: (values: T, touched: any) => any) {
  const [values, setValues] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateEffect = () => {
    const results = validate(values, touched);
    setErrors(results.errors);
    setIsValid(results.isValid);
  };

  useEffect(validateEffect, []);
  useEffect(validateEffect, [values, touched]);

  const onChange = (e: OnChangeEvent) => {
    setValues((obj) => ({
      ...obj,
      [e.target.name]: e.target.value,
    }));
    setTouched((obj) => ({
      ...obj,
      [e.target.name]: true,
    }));
  };

  const reset = () => {
    setValues(initialState);
    setTouched({});
  };

  return {
    values, touched, errors, isValid, reset, onChange,
  };
}

export default useForm;
