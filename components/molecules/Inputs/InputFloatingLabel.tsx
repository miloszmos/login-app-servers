import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  PropsWithChildren,
  useState,
} from 'react';
import HidePasswordIcon from '../../atoms/icons/HidePasswordIcon';
import ShowPasswordIcon from '../../atoms/icons/ShowPasswordIcon';

interface InputFloatingLabelProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void;
  value: string;
  identity: string;
  type?: HTMLInputTypeAttribute;
}

const InputFloatingLabel = ({
  type = 'text',
  value,
  onChange,
  identity,
  children,
  className,
  ...rest
}: PropsWithChildren<InputFloatingLabelProps>) => {
  const [visible, setVisible] = useState(false);

  const handleVisbleToggle = () => setVisible(!visible);

  return (
    <div className="relative">
      <input
        type={visible ? 'text' : type}
        value={value}
        onChange={onChange}
        placeholder=" "
        id={identity}
        name={identity}
        autoComplete={identity}
        className={`form-control block w-full px-4 py-2.5 text-base font-normal text-gray-700 bg-white appearance-none bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-0 peer ${className}`}
        {...rest}
      />
      {type === 'password' && (
        <div
          onClick={handleVisbleToggle}
          className="icon h-6 w-6 absolute top-2.5 right-4 cursor-pointer"
        >
          {visible ? <HidePasswordIcon /> : <ShowPasswordIcon />}
        </div>
      )}
      <label
        htmlFor={identity}
        className="absolute text-base text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-6 left-1"
      >
        {children}
      </label>
    </div>
  );
};

export default InputFloatingLabel;
