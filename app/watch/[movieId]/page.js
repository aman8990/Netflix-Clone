'use client';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import useMovie from '@/app/_hooks/useMovie';

function Page({ params }) {
  const router = useRouter();
  const { movieId } = params;
  const { data } = useMovie(movieId);
  console.log(movieId);
  console.log(data);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          className="text-white cursor-pointer"
          size={40}
          onClick={() => router.push('/')}
        />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        src={data?.videoUrl}
        autoPlay
        controls
      ></video>
    </div>
  );
}

export default Page;
