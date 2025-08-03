import { useParams, Link } from 'react-router-dom';
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
    <div className="max-w-md mx-auto text-center">
      <Link to="/pagination" className="text-sm text-blue-600 underline block mb-4 text-left">
        ← Back
      </Link>

      <h1 className="text-2xl font-bold capitalize mb-2">{data?.name}</h1>

      <img
        src={data?.sprites.front_default}
        alt={data?.name}
        className="w-32 h-32 mx-auto mb-4"
      />

      <div className="text-gray-700 space-y-2">
        <p><strong>Height:</strong> {data?.height}</p>
        <p><strong>Weight:</strong> {data?.weight}</p>
        <p>
          <strong>Types:</strong>{' '}
          {data?.types.map(t => t.type.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
