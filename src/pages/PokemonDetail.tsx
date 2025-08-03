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
            className="absolute left-4 top-4 text-sm bg-white text-gray-800 px-3 py-1 rounded shadow hover:bg-gray-100 sm:left-50"
          >
            ← Back to List
          </Link>

        <div className={`${gradientBg} text-white px-6 py-4 relative`}>
          
          <h1 className="text-3xl font-extrabold text-center flex items-center justify-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bolt-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/> </linearGradient></defs><path d="M13 2L4 14H11L9 22L20 10H13L13 2Z" stroke="url(#bolt-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </h1>
          <p className="text-center text-lg mt-2">#{id}</p>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-center">
            <img
              src={data.sprites.front_default}
              alt={data.name}
              className="mx-auto w-40 h-40"
            />

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {data.types.map(({ type }) => (
                <span
                  key={type.name}
                  className="bg-red-500 text-white text-sm px-3 py-1 rounded-full capitalize"
                >
                  {type.name}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="bg-gray-50 p-3 rounded shadow text-center">
                <p className="text-sm text-gray-500 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3L3 5L14 16L16 14L5 3Z" /><path d="M6.5 4.5L7.5 5.5" /><path d="M9 7L10 8" /><path d="M11.5 9.5L12.5 10.5" /></svg>
                    <span>Height</span>
                </p>
                <p className="font-extrabold text-xl">{(data.height / 10).toFixed(1)} m</p>
              </div>
              <div className="bg-gray-50 p-3 rounded shadow text-center">
                <p className="text-sm text-gray-500 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500"><rect x="10" y="4" width="4" height="4" rx="1" /><path d="M5 10h14l-2 8H7l-2-8z" /></svg>
                    <span>Weight</span>
                </p>
                <p className="font-extrabold text-xl">{(data.weight / 10).toFixed(1)} kg</p>
              </div>
            </div>
          </div>

          <div className="text-left">
                <h3 className="text-xl font-extrabold mb-4">Base Stats</h3>
                <div className="space-y-3 text-sm">
                    {data.stats.map((stat) => (
                    <div key={stat.stat.name}>
                        <div className="flex justify-between items-center mb-1">
                        <span className="capitalize font-medium text-sm">
                            {stat.stat.name.replace('-', ' ')}
                        </span>
                        <span className="text-sm font-medium">{stat.base_stat}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded">
                        <div
                            className="bg-black h-2 rounded"
                            style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                        ></div>
                        </div>
                    </div>
                    ))}
                </div>

                <h3 className="text-xl font-extrabold mt-8 mb-3">Abilities</h3>
                <ul>
                    {data.abilities.map((ability) => (
                        <li key={ability.ability.name} className='mt-2'>
                            <span className={`px-3 py-1 rounded-full border-1 border-solid border-gray-300 mr-2 text-gray-800 font-bold w-auto text-xs ${ability.is_hidden ? 'text-gray-500 bg-gray-200 border-gray-200' : 'bg-white'}`}>
                                {ability.ability.name}
                            </span>
                            {ability.is_hidden && <span className="ml-1 text-sm font-normal">(Hidden)</span>}
                        </li>
                    ))}
                </ul>

                <h3 className="text-xl font-extrabold mt-8">Base Experience</h3>
                <p className="text-purple-600 font-extrabold text-xl">{data.base_experience} XP</p>
                </div>

        </div>

      </div>
    </section>
  );
};

export default PokemonDetail;
