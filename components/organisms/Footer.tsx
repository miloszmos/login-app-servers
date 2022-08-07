import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center text-sm text-gray-500 mb-5 h-8">
      © {new Date().getFullYear()} Servers™. All Rights Reserved.
    </footer>
  );
};

export default Footer;
