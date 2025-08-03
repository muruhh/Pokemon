import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonList } from '../api/pokemon';
import Header from '../components/Header';
import Loader from '../components/Loader';
import PokemonCard from '../components/PokemonCard';
import type { PokemonListResponse } from '../types/pokemon';

function PaginationView() {
  const PAGE_SIZE = 20;
  const [page, setPage] = useState(0);

  const { data, isLoading, isError, refetch } = useQuery<PokemonListResponse>({
    queryKey: ['pokemonList', page],
    queryFn: () => fetchPokemonList(PAGE_SIZE, page * PAGE_SIZE),
  });

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setPage((prev) => prev + 1);

  const totalPages = data ? Math.ceil(data.count / PAGE_SIZE) : 0;

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="text-center py-6">
        <p className="text-red-500 mb-2">Failed to load Pokémon list.</p>
        <button onClick={() => refetch()} className="text-blue-600 underline">
          Retry
        </button>
      </div>
    );

  return (
    <section className='min-h-screen bg-blue-100 w-full flex flex-col items-center py-10 px-4'>
        <Header />

        <div className="flex-col items-center w-full max-w-7xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
                {data?.results.map((pokemon, i) => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        spriteUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(pokemon.url.split('/').filter(Boolean).pop())}.png`}
                        index={page * PAGE_SIZE + i}
                    />
                ))}
            </div>


            <div className="flex flex-col items-center gap-2 mt-8">
                <div className="flex items-center gap-2 flex-wrap">

                <button
                    onClick={handlePrev}
                    disabled={page === 0}
                    className="px-3 py-1 rounded text-black bg-white hover:bg-gray-100 disabled:opacity-50"
                >
                    &lt; Previous
                </button>

                {Array.from({ length: totalPages }).map((_, i) => {
                    const isEdgePage = i === 0 || i === totalPages - 1;
                    const isAroundCurrent = Math.abs(i - page) <= 2;

                    if (isEdgePage || isAroundCurrent) {
                    return (
                        <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`px-3 py-1 rounded text-sm font-medium ${
                            page === i
                            ? 'bg-black text-white'
                            : 'bg-white hover:bg-gray-100'
                        }`}
                        >
                        {i + 1}
                        </button>
                    );
                    }

                    if (
                    (i === page - 3 && page - 3 > 1) ||
                    (i === page + 3 && page + 3 < totalPages - 2)
                    ) {
                    return (
                        <span
                        key={i}
                        className="py-1 text-gray-500 select-none text-sm"
                        >
                        ...
                        </span>
                    );
                    }

                    return null;
                })}

                <button
                    onClick={handleNext}
                    disabled={page >= totalPages - 1}
                    className="px-3 py-1 text-black bg-white rounded hover:bg-gray-100 disabled:opacity-50"
                >
                    Next &gt;
                </button>
                </div>

                <p className="text-sm text-gray-500">
                Page {page + 1} of {totalPages} ({PAGE_SIZE} Pokémon shown)
                </p>
            </div>
        </div>
    </section>
  );
}

export default PaginationView;
