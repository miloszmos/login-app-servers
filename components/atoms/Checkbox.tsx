import React, { FC, InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void;
  checked: boolean;
  type?: 'checkbox';
  name: string;
  identity: string;
}

const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  identity,
  name,
  type = 'checkbox',
  ...rest
}) => {
  return (
    <>
      <label
        className="absolute overflow-hidden h-1 m-0 w-0"
        htmlFor={identity}
      >
        {name}
      </label>
      <input
        checked={checked}
        onChange={onChange}
        id={identity}
        name={name}
        type={type}
        className="w-4 h-4 text-gray-600 bg-gray-100 rounded border-gray-300 focus:ring-gray-500 accent-slate-700"
        {...rest}
      />
    </>
  );
};

export default Checkbox;
