/* eslint-disable */

const PokemonCard = ({ img, name, fetchData }) => {
  return (
    <div>
      <div
        className="pokemon-card"
        onClick={() => {
          fetchData(name);
        }}
      >
        <img src={img} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
