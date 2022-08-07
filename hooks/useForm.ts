import { ChangeEvent, useState } from 'react';

export default function useForm<T>(initial: T) {
  const [inputs, setInputs] = useState(initial);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  return {
    inputs,
    handleChange,
    resetForm,
  };
}
