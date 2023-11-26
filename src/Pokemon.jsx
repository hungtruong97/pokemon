/* eslint-disable */

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <h2> Your pokemon is {pokemon.name}</h2>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
      <div className="info">
        <p>ID: {pokemon.id}</p>
        <p>Height: {pokemon.height * 10} cm</p>
        <p>Weight: {pokemon.weight / 10} kg</p>
        <p>Type: {pokemon.types[0].type.name}</p>
        <p>
          {" "}
          Abilities:{" "}
          {pokemon.abilities.map((item, index) => (
            <span key={index}>
              {item.ability.name}
              {index !== pokemon.abilities.length - 1 ? "," : ""}{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Pokemon;
