import useSWR from 'swr';
import fetcher from '@/app/_lib/fetcher';

const useMovie = (id) => {
  const { data, error, isLoading } = useSWR(
    id ? `/api/movie/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isLoading };
};

export default useMovie;
