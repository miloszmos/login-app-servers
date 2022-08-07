import { PropsWithChildren } from 'react';

const Table = ({ children }: PropsWithChildren) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      {children}
    </table>
  );
};

export default Table;
