/* eslint-disable */

const PokemonCard = ({ img, name, showPokemon, fetchData }) => {
  return (
    <div>
      <div
        className="pokemon-card"
        onClick={() => {
          fetchData(name);
          showPokemon();
        }}
      >
        <img src={img} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
