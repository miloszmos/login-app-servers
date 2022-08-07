import { ReactElement } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

const HomePage = () => {
  return <h1 className="text-3xl">HomePage Page</h1>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default HomePage;
