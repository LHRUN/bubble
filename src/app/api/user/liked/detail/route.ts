import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession, responseFail } from '@/app/api/utils';
import { HTTP_CODE } from '@/app/api/common/httpCode';

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  const userId = session?.user?.userId;

  // validation session
  if (!userId) {
    return responseFail(HTTP_CODE.NOT_LOGGED);
  }

  const type = req?.nextUrl?.searchParams.get('type');

  let data = {};
  if (type === 'component') {
    const res = await prisma.user.findUnique({
      where: {
        id: userId
      },
      include: {
        likedComponents: {
          select: {
            component: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });
    data = res?.likedComponents ?? [];
  } else {
    const res = await prisma.user.findUnique({
      where: {
        id: userId
      },
      include: {
        likedProfiles: {
          select: {
            profile: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });
    data = res?.likedProfiles ?? [];
  }

  return NextResponse.json(
    {
      data
    },
    {
      status: 200
    }
  );
}
