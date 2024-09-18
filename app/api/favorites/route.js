import { NextResponse } from 'next/server';
import prismadb from '@/app/_lib/prismadb';
import serverAuth from '@/app/_lib/serverAuth';

export async function GET(req) {
  try {
    const { currentUser } = await serverAuth(req);

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return NextResponse.json(favoriteMovies);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error occurred', error },
      { status: 400 }
    );
  }
}
