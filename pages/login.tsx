import cookie from 'cookie';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import React, { ReactElement, SyntheticEvent } from 'react';
import { useLogin, UserLogin } from '../hooks/useLogin';
import LoginIcon from '../components/atoms/icons/LoginIcon';
import InputFloatingLabel from '../components/molecules/Inputs/InputFloatingLabel';
import useForm from '../hooks/useForm';
import FooterLayout from '../components/layouts/FooterLayout';

const initialValues: UserLogin = {
  username: '',
  password: '',
};

const LoginPage = () => {
  const { inputs, handleChange } = useForm<UserLogin>(initialValues);
  const { login, error, loading } = useLogin();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    login(inputs);
  };

  return (
    <>
      <Head>
        <title>Servers | Login</title>
      </Head>
      <section className="container px-6 py-12 mx-auto h-[calc(100svh_-_52px)] md:h-[calc(100vh_-_52px)]">
        <div className="block sm:flex sm:justify-center sm:items-center sm:flex-wrap h-full text-gray-800">
          <div className="mb-0 h-60 w-full md:h-auto md:w-6/12 sm:-mb-10 lg:h-auto">
            <a
              aria-label="resource policy"
              href="https://storyset.com/web"
              aria-disabled
            ></a>
            <LoginIcon className="m-auto h-full" />
          </div>
          <div className="m-auto sm:m-0 w-10/12 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 lg:ml-20 md:mt-0">
            <div className="flex justify-center mb-10">
              <h1 className="text-gray-900 font-semibold text-3xl">Welcome!</h1>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
              <InputFloatingLabel
                identity="username"
                value={inputs.username}
                onChange={handleChange}
                required
                className="mb-6"
              >
                Username
              </InputFloatingLabel>
              <InputFloatingLabel
                type="password"
                identity="password"
                onChange={handleChange}
                value={inputs.password}
              >
                Password
              </InputFloatingLabel>
              {error && (
                <p className="error-message text-xs my-4 leading-4  text-red-500 font-medium">
                  Something went wrong, check credentials!
                </p>
              )}
              <div className={`${!error && 'mt-12'}`}>
                <button
                  disabled={loading}
                  type="submit"
                  className="inline-block px-7 py-3 bg-sky-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-500 disabled:cursor-wait disabled:opacity-70 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  {loading ? 'Logging In...' : 'Log In'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { ['token']: token } = cookie.parse(req.headers.cookie || '');

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  return {
    props: {},
  };
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <FooterLayout>{page}</FooterLayout>;
};

export default LoginPage;
