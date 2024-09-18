import { getServerSession } from 'next-auth/next';
import prismadb from '@/app/_lib/prismadb';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const serverAuth = async (req) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
};

export default serverAuth;
