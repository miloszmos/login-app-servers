import { useRouter } from 'next/router';
import React from 'react';
import FourOFourIcon from '../components/atoms/icons/FourOFourIcon';

const FourOFourPage = () => {
  const router = useRouter();
  const handleGoHomePage = () => router.replace('/');

  return (
    <section className="h-screen">
      <div className="px-6 py-12 h-full flex flex-col justify-center items-center">
        <div className="h-auto w-2/5">
          <a
            aria-label="resource policy"
            aria-disabled
            href="https://storyset.com/web"
          ></a>
          <FourOFourIcon />
        </div>
        <div className="h-1/2">
          <button
            onClick={handleGoHomePage}
            type="button"
            className="text-zinc-900 hover:underline hover:text-zinc-900 focus:outline-none font-medium text-sm p-2.5 text-center inline-flex items-center"
          >
            <span>&larr; Back To Home Page</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourOFourPage;
