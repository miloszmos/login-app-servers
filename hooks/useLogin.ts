import { useRouter } from 'next/router';
import { useState } from 'react';

export type UserLogin = {
  username: string;
  password: string;
};

export const useLogin = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async ({ username, password }: UserLogin) => {
    setLoading(true);
    const res = await fetch('/api/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    });
    setLoading(false);
    if (res.ok) {
      router.push('/');
    } else {
      setError(true);
    }
  };
  return { login, error, loading };
};
