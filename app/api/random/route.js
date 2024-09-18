import { NextResponse } from 'next/server';
import prismadb from '@/app/_lib/prismadb';
import serverAuth from '@/app/_lib/serverAuth';

export async function GET(req) {
  try {
    await serverAuth(req);

    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return NextResponse.json(randomMovies[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error occurred', error },
      { status: 400 }
    );
  }
}
