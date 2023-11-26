import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import { getServerSession, responseFail } from '../../utils';
import { HTTP_CODE } from '../../common/httpCode';

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const userId = session?.user?.userId;

  // validation session
  if (!userId) {
    return responseFail(HTTP_CODE.NOT_LOGGED);
  }

  const params = await req.json();
  const componentId = params?.componentId;
  const likeStatus = params?.likeStatus;

  if (!componentId || ![0, 1].includes(likeStatus)) {
    return responseFail(HTTP_CODE.PARAM_ERROR);
  }

  // likeStatus 0: disLike 1: like
  if (likeStatus === 0) {
    await prisma.userLikedComponent.delete({
      where: { userId_componentId: { userId, componentId } }
    });
  } else {
    await prisma.userLikedComponent.create({
      data: {
        userId,
        componentId
      }
    });
  }

  // update like num
  const likedComponent = await prisma.component.update({
    where: { id: componentId },
    data: { likes: { [likeStatus === 0 ? 'decrement' : 'increment']: 1 } }
  });

  // get new likedComponents
  const data = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      likedComponents: {
        select: {
          componentId: true
        }
      }
    }
  });
  const likedComponents = data?.likedComponents ?? [];

  return NextResponse.json(
    {
      data: {
        likes: likedComponent?.likes,
        likedComponents
      }
    },
    {
      status: 200
    }
  );
}
