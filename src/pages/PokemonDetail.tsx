import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonDetail } from '../api/pokemon';
import Loader from '../components/Loader';
import type { PokemonDetail as PokemonDetailType } from '../types/pokemon';

const PokemonDetail = () => {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading, isError, refetch } = useQuery<PokemonDetailType>({
    queryKey: ['pokemonDetail', name],
    queryFn: () => fetchPokemonDetail(name!),
    enabled: !!name,
  });

  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <div className="text-center py-6">
        <p className="text-red-500 mb-2">Failed to load Pokémon details.</p>
        <button onClick={() => refetch()} className="text-blue-600 underline">Retry</button>
      </div>
    );
  }

  const id = data.id.toString().padStart(3, '0');
  const gradientBg = 'bg-gradient-to-r from-purple-500 to-pink-500';

  return (
    <section className="min-h-screen py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow overflow-hidden">
        <Link
            to="/pagination"
            className="absolute left-50 top-4 text-sm bg-white text-gray-800 px-3 py-1 rounded shadow hover:bg-gray-100"
          >
            ← Back to List
          </Link>

        <div className={`${gradientBg} text-white px-6 py-4 relative`}>
          
          <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bolt-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/> </linearGradient></defs><path d="M13 2L4 14H11L9 22L20 10H13L13 2Z" stroke="url(#bolt-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </h1>
          <p className="text-center text-sm">#{id}</p>
        </div>

      </div>
    </section>
  );
};

export default PokemonDetail;
