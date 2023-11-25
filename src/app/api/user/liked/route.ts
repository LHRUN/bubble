import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getServerSession, responseFail } from '../../utils';
import { HTTP_CODE } from '../../common/httpCode';

export async function GET() {
  const session = await getServerSession();
  const userId = session?.user?.userId;

  if (!userId) {
    return responseFail(HTTP_CODE.NOT_LOGGED);
  }

  const data = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      likedProfiles: {
        select: {
          profileId: true
        }
      },
      likedComponents: {
        select: {
          componentId: true
        }
      }
    }
  });
  const likedProfiles = data?.likedProfiles ?? [];
  const likedComponents = data?.likedComponents ?? [];

  return NextResponse.json(
    {
      data: {
        likedProfiles,
        likedComponents
      }
    },
    {
      status: 200
    }
  );
}
