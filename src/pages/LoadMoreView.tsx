import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPokemonList } from '../api/pokemon';
import Header from '../components/Header';
import Loader from '../components/Loader';
import PokemonCard from '../components/PokemonCard';
import type { PokemonListResponse } from '../types/pokemon';

const PAGE_SIZE = 20;

const LoadMoreView = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch,
  } = useInfiniteQuery<PokemonListResponse>({
    queryKey: ['pokemonInfinite'],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList(PAGE_SIZE, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * PAGE_SIZE;
      return nextOffset < lastPage.count ? nextOffset : undefined;
    },
  });

  const pokemonData = data?.pages.flatMap((page) => page.results) ?? [];

  useEffect(() => {
    if (!loaderRef.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <section className='min-h-screen bg-green-50 w-full flex flex-col items-center py-10 px-4'>
        <Header />
        
        <div className="flex-col items-center py-10 px-4">
            {isLoading && <Loader />}

            {!isLoading && pokemonData.length > 0 && (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {pokemonData.map((pokemon, i) => {
                        const id = Number(pokemon.url.split('/').filter(Boolean).pop());
                        return (
                            <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            spriteUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            index={i}
                            />
                        );
                        })}
                    </div>

                    {hasNextPage && (
                        <div ref={loaderRef} className="flex flex-col items-center mt-10">
                            <div className="mt-2 text-sm text-gray-600 flex">
                                <div className="w-5 h-5 mr-3 border-3 border-t-transparent border-green-500 rounded-full animate-spin"></div>
                                <p>Loading more Pokémon...</p>
                            </div>
                        </div>
                    )}

                    <div className="text-center mt-4 text-sm text-gray-600">
                        Showing {pokemonData.length} Pokémon
                    </div>
                </>
            )}

            {isError && (
                <div className="text-center py-6">
                    <p className="text-red-500 mb-2">Failed to load Pokémon.</p>
                    <button onClick={() => refetch()} className="text-blue-600 underline">
                        Retry
                    </button>
                </div>
            )}
        </div>
    </section>
  );
};

export default LoadMoreView;
