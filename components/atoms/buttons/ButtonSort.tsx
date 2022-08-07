import React, { ButtonHTMLAttributes, FC } from 'react';
import SortIcon from '../icons/SortIcon';

interface ButtonSortProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  name: string;
}

const ButtonSort: FC<ButtonSortProps> = ({ onClick, name, ...rest }) => {
  return (
    <button
      type="button"
      aria-label={`sort by ${name}`}
      name={name}
      onClick={onClick}
      {...rest}
    >
      <SortIcon />
    </button>
  );
};

export default ButtonSort;
