import '../styles/globals.css';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Servers | Look up</title>
        <meta
          name="description"
          content="A place where you can look for our servers"
        />
        <meta property="og:title" content="Severs | The best you can find" />
        <meta
          property="og:description"
          content="A place where you can look for our servers"
        />
        <meta property="og:url" content="https:url" />
        <meta property="og:type" content="https://website.com/" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
