/* eslint-disable */

const Pokemon = ({ pokemon, showEvolution, showPokemon }) => {
  return (
    <div className="pokemon">
      <h2>Your pokemon is {pokemon.name}</h2>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
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
        </p>{" "}
      </div>
      <button onClick={showEvolution}>Show its evolution</button>
    </div>
  );
};

export default Pokemon;
