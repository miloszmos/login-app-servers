import { PropsWithChildren } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
