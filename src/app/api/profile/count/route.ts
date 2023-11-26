import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const profileCount = await prisma.profile.count();

  return NextResponse.json(
    {
      data: profileCount
    },
    {
      status: 200
    }
  );
}
