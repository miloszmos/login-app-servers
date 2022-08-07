import { PropsWithChildren } from 'react';
import Footer from '../organisms/Footer';

const FooterLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default FooterLayout;
