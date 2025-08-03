import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonList } from '../api/pokemon';
import Loader from '../components/Loader';
import PokemonCard from '../components/PokemonCard';
import type { PokemonListResponse } from '../types/pokemon';

function PaginationView() {
  
    const PAGE_SIZE = 20;

    const [page, setPage] = useState(0);

    const { data, isLoading, isError, refetch } = useQuery<PokemonListResponse>({
        queryKey: ['pokemonList', page],
        queryFn: () => fetchPokemonList(PAGE_SIZE, page * PAGE_SIZE),
        keepPreviousData: true,
    });

    if (isLoading) return <Loader />;

    if (isError) return (
        <div className="text-center py-6">
            <p className="text-red-500 mb-2">Failed to load Pokémon list.</p>
            <button onClick={() => refetch()} className="text-blue-600 underline">Retry</button>
        </div>
    );
    
  return (
    <section className="flex-col items-center py-10 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
            {data?.results.map((pokemon, i) => (
                <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    spriteUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${page * PAGE_SIZE + i + 1}.png`}
                    index={page * PAGE_SIZE + i}
                />
            ))}
        </div>
    </section>
  );
};

export default PaginationView;
