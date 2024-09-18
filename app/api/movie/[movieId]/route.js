import { NextResponse } from 'next/server';
import prismadb from '@/app/_lib/prismadb';
import serverAuth from '@/app/_lib/serverAuth';

export async function GET(req, { params }) {
  try {
    await serverAuth(req);

    const { movieId } = params;

    if (typeof movieId !== 'string') {
      return NextResponse.json(
        { message: 'Invalid Movie ID' },
        { status: 404 }
      );
    }

    if (!movieId) {
      return NextResponse.json(
        { message: 'Invalid Movie ID' },
        { status: 404 }
      );
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      return NextResponse.json(
        { message: 'Invalid Movie ID' },
        { status: 404 }
      );
    }

    return NextResponse.json(movie);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error occurred', error },
      { status: 400 }
    );
  }
}
