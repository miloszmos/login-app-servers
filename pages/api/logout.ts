import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function logout(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', '', {
      httpOnly: true,
      expires: new Date(0),
      sameSite: 'strict',
      path: '/',
    })
  );
  res.statusCode = 200;
  res.json({ message: 'Logged out!' });
}
