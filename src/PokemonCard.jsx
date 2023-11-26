/* eslint-disable */

import axios from "axios";
import { useEffect, useState } from "react";

const PokemonCard = ({ img, name }) => {
  const [pokemon, setPokemon] = useState(null);
  const handleClick = async (name) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    setPokemon(response.data);
  };

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <div className="pokemon-card" onClick={() => handleClick(name)}>
      <img src={img} />
      <p>{name}</p>
    </div>
  );
};

export default PokemonCard;
