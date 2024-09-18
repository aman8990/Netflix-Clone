import { NextResponse } from 'next/server';
import prismadb from '@/app/_lib/prismadb';
import serverAuth from '@/app/_lib/serverAuth';

export async function GET(req) {
  try {
    await serverAuth(req);

    const movies = await prismadb.movie.findMany();

    return NextResponse.json(movies);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error occurred', error },
      { status: 400 }
    );
  }
}
