import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonDetail } from '../api/pokemon';
import type { PokemonDetail } from '../types/pokemon';

const PokemonDetail = () => {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading, isError, refetch } = useQuery<PokemonDetail>({
    queryKey: ['pokemonDetail', name],
    queryFn: () => fetchPokemonDetail(name!),
    enabled: !!name,
  });
   

  return (
    <h1>Pokemon Detail Page</h1>
  );
};

export default PokemonDetail;
