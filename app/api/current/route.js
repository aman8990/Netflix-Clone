import { NextResponse } from 'next/server';
import serverAuth from '@/app/_lib/serverAuth';

export async function GET(req) {
  try {
    const { currentUser } = await serverAuth(req);

    return NextResponse.json(currentUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error occurred', error },
      { status: 400 }
    );
  }
}
