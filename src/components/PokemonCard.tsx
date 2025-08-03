import { Link } from 'react-router-dom';

type Props = {
  name: string;
  spriteUrl: string;
  index: number;
};

const PokemonCard = ({ name, spriteUrl, index }: Props) => {
  const paddedIndex = `#${String(index + 1).padStart(3, '0')}`;

  return (
    <div className="bg-white rounded shadow p-4 text-center">
        <Link
            to={`/pokemon/${name}`}
            className="bg-white hover:shadow-lg border rounded-lg p-4 flex flex-col items-center text-center transition"
            >
                <div className="bg-gray-100">
            <img src={spriteUrl} alt={name} className="mx-auto w-full object-contain" />
            </div>
            <span className="capitalize font-medium text-lg">{name}</span>
            <span className="text-sm text-gray-400">{paddedIndex}</span>
        </Link>
    </div>
  );
};

export default PokemonCard;
