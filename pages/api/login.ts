import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const API_ENDPOINT = 'https://playground.tesonet.lt/v1/tokens';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });
  if (response.ok) {
    const { ['token']: token } = await response.json();
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: 'strict',
        path: '/',
      })
    );
    res.statusCode = 200;
    res.json({ message: 'Successfully logged in' });
  } else {
    res.statusCode = 401;
    res.json({ message: 'Something went wrong' });
  }
}
