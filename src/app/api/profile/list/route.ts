import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const pageNum = req?.nextUrl?.searchParams.get('pageNum') ?? 1;
  const pageSize = req?.nextUrl?.searchParams.get('pageSize') ?? 20;

  const data = await prisma.profile.findMany({
    skip: (Number(pageNum) - 1) * Number(pageSize),
    orderBy: {
      likes: 'desc'
    },
    take: Number(pageSize)
  });

  return NextResponse.json(
    {
      data
    },
    {
      status: 200
    }
  );
}
