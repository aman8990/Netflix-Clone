import { NextResponse } from 'next/server';
import prismadb from '@/app/_lib/prismadb';
import serverAuth from '@/app/_lib/serverAuth';
import { without } from 'lodash';

export async function POST(req) {
  try {
    const { currentUser } = await serverAuth(req);

    const body = await req.json();

    const { movieId } = body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      return NextResponse.json(
        { message: 'Invalid Movie ID' },
        { status: 404 }
      );
    }

    const user = await prismadb.user.update({
      where: {
        email: currentUser.email || '',
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error occurred', error },
      { status: 400 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { currentUser } = await serverAuth(req);

    const body = await req.json();

    const { movieId } = body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      return NextResponse.json(
        { message: 'Invalid Movie ID' },
        { status: 404 }
      );
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

    const updatedUser = await prismadb.user.update({
      where: {
        email: currentUser.email || '',
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error occurred', error },
      { status: 400 }
    );
  }
}
