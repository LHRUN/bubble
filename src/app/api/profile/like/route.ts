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
  const profileId = params?.profileId;
  const likeStatus = params?.likeStatus;

  if (!profileId || ![0, 1].includes(likeStatus)) {
    return responseFail(HTTP_CODE.PARAM_ERROR);
  }

  // likeStatus 0: disLike 1: like
  if (likeStatus === 0) {
    await prisma.userLikedProfile.delete({
      where: { userId_profileId: { userId, profileId } }
    });
  } else {
    await prisma.userLikedProfile.create({
      data: {
        userId: userId,
        profileId: profileId
      }
    });
  }

  // update like num
  const likedProfile = await prisma.profile.update({
    where: { id: profileId },
    data: { likes: { [likeStatus === 0 ? 'decrement' : 'increment']: 1 } }
  });
  // get new likedComponents
  const data = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      likedProfiles: {
        select: {
          profileId: true
        }
      }
    }
  });
  const likedProfiles = data?.likedProfiles ?? [];

  return NextResponse.json(
    {
      data: {
        likes: likedProfile?.likes,
        likedProfiles
      }
    },
    {
      status: 200
    }
  );
}
