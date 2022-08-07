import { useRouter } from 'next/router';
import { useState } from 'react';

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const logout = async () => {
    setLoading(true);
    const res = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    setLoading(false);
    if (res.ok) {
      router.push('/login');
    }
  };
  return { logout, loading };
};
