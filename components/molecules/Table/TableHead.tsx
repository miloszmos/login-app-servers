import { PropsWithChildren } from 'react';

const TableHead = ({ children }: PropsWithChildren) => {
  return (
    <thead className="text-sm text-gray-700 uppercase bg-gray-100">
      {children}
    </thead>
  );
};

export default TableHead;
