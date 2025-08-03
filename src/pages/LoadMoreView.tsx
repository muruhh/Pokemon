import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPokemonList } from '../api/pokemon';
import Loader from '../components/Loader';
import PokemonCard from '../components/PokemonCard';
import type { PokemonListResponse } from '../types/pokemon';

const PAGE_SIZE = 20;

const LoadMoreView = () => {
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

  return (
    <section className="flex-col items-center py-10 px-4">
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
            <div className="flex justify-center mt-8">
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                {isFetchingNextPage ? <Loader /> : 'Load More'}
              </button>
            </div>
          )}
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
    </section>
  );
};

export default LoadMoreView;
