import React from 'react';
import { useLogout } from '../../hooks/useLogout';

const Header = () => {
  const { logout, loading } = useLogout();
  return (
    <div className="h-20 bg-neutral-800 shadow-md md:shadow-xl w-full flex items-center">
      <div className="container mx-auto flex justify-between px-6">
        <p className="text-3xl text-slate-200">_Servers</p>
        <button
          aria-label="logout"
          disabled={loading}
          aria-disabled={loading}
          type="button"
          onClick={logout}
          className="text-slate-200 font-semibold underline decoration-transparent underline-offset-1 transition ease-in-out hover:decoration-white duration-300"
        >
          {loading ? 'See You!' : <>Logout &rarr;</>}
        </button>
      </div>
    </div>
  );
};

export default Header;
