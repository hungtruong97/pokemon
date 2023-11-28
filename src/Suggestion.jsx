/* eslint-disable */

import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

const Suggestion = ({ pokemonType, fetchData }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      //   const list = await fetch3PokemonWithSameType(pokemonType);
      //   list.forEach((pokemon) => {
      //     fetchPokemonImg(pokemon.name).then((img) => {
      //       setPokemonList((prev) => [...prev, { name: pokemon.name, img: img }]);
      //     });
      //   });
      //   console.log(list);
      // };

      const list = await fetch3PokemonWithSameType(pokemonType);
      const promises = list.map((pokemon) => fetchPokemonImg(pokemon.name));
      const images = await Promise.all(promises);
      const pokemonWithImages = list.map((pokemon, index) => ({
        name: pokemon.name,
        img: images[index],
      }));
      setPokemonList(pokemonWithImages);
    };
    fetchPokemon();
  }, []);

  const fetchPokemonImg = async (name) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const img = response.data.sprites.front_default;
    return img;
  };

  const fetch3PokemonWithSameType = async (type) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    const list = response.data.pokemon;

    let randomPokemonList = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * list.length);
      let randomPokemon = list[randomIndex].pokemon;
      randomPokemonList.push(randomPokemon);
    }
    console.log(randomPokemonList);

    return randomPokemonList;
  };

  return (
    <div className="suggestion">
      <h2>Pokemons with the same type</h2>
      <div className="row">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            fetchData={fetchData}
            img={pokemon.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
