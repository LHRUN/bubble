import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const categoryId = req?.nextUrl?.searchParams.get('categoryId');

  let data = [];
  if (categoryId) {
    data = await prisma.component.findMany({
      where: {
        categorys: {
          some: {
            categoryId: categoryId
          }
        }
      },
      orderBy: {
        likes: 'desc'
      }
    });
  } else {
    data = await prisma.component.findMany({
      orderBy: {
        likes: 'desc'
      }
    });
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
