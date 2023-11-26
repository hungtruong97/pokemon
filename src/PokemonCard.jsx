/* eslint-disable */

const PokemonCard = ({ img, name }) => {
  return (
    <div className="pokemon-card">
      <img src={img} />
      <p>{name}</p>
    </div>
  );
};

export default PokemonCard;
