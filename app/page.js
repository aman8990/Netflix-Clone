'use client';

import Navbar from '@/app/_components/Navbar';
import Billboard from '@/app/_components/Billboard';
import MovieList from './_components/MovieList';
import useMovieList from './_hooks/useMovieList';
import useFavorites from './_hooks/useFavorites';
import InfoModal from '@/app/_components/InfoModal';
import useInfoModal from '@/app/_hooks/useInfoModal';

function Page() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}

export default Page;
