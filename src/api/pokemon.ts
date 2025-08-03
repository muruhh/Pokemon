const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonList(limit = 20, offset = 0) {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon list');
  return res.json();
}

export async function fetchPokemonDetail(name: string) {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon details');
  return res.json();
}