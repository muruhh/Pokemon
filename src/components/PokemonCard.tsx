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
        <Link to={`/pokemon/${name}`} >
            <div className="bg-gray-100">
                <img src={spriteUrl} alt={name} className="mx-auto h-32 object-contain" />
            </div>
            <h2 className="capitalize font-medium text-lg pt-3">{name}</h2>
            <p className="text-sm text-gray-400">{paddedIndex}</p>
        </Link>
    </div>
  );
};

export default PokemonCard;
