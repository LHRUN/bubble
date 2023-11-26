import { NextResponse } from 'next/server';
import { getServerSession as originalGetServerSession } from 'next-auth/next';
import { cookies, headers } from 'next/headers';
import { authOptions } from '../common/authOptions';
import { ERROR_MSG } from '../common/httpCode';

export const responseFail = (code: string) => {
  return NextResponse.json(
    {
      data: {
        errCode: code,
        errMsg: ERROR_MSG[code]
      }
    },
    {
      status: 200
    }
  );
};

export const getServerSession = async () => {
  const req = {
    headers: Object.fromEntries(headers() as Headers),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value])
    )
  } as any;
  const res = { getHeader() {}, setCookie() {}, setHeader() {} } as any;

  const session = await originalGetServerSession(req, res, authOptions);
  return session;
};
