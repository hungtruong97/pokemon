/* eslint-disable */

import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import PokemonCard from "./PokemonCard";

const Evolution = ({ showPokemon, showEvolution, data, fetchData }) => {
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [pokemonImages, setPokemonImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getEvolutionData = async () => {
      if (data && data.id) {
        try {
          const speciesData = await fetchSpecies(data.id);
          const evolutionData = await fetchEvolutionChain(speciesData);
          setEvolutionChain(evolutionData);

          let images = {};
          let currentStage = evolutionData.chain;
          while (currentStage) {
            const imageUrl = await fetchPokemonImage(currentStage.species.name);
            images[currentStage.species.name] = imageUrl;
            currentStage =
              currentStage.evolves_to.length > 0
                ? currentStage.evolves_to[0]
                : null;
          }
          setPokemonImages(images);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    setIsLoading(true);
    getEvolutionData();
  }, [data]);

  useEffect(() => {
    console.log(pokemonImages);
  }, [pokemonImages]);

  const fetchSpecies = async (pokemonId) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEvolutionChain = async (speciesData) => {
    try {
      const evolutionChainURL = speciesData.evolution_chain.url;
      const response = await axios.get(evolutionChainURL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemonImage = async (pokemonName) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
      );
      return response.data.sprites.front_default;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const displayEvolutionChain = () => {
    if (!evolutionChain) return null;

    let content = [];
    let currentStage = evolutionChain.chain;

    while (currentStage) {
      const imageUrl = pokemonImages[currentStage.species.name];
      if (imageUrl) {
        content.push(
          <PokemonCard
            img={imageUrl}
            name={currentStage.species.name}
            showPokemon={showPokemon}
            showEvolution={showEvolution}
            fetchData={fetchData}
          />
        );
      }

      currentStage =
        currentStage.evolves_to.length > 0 ? currentStage.evolves_to[0] : null;
    }

    return content;
  };

  return (
    <div className="evolution">
      {isLoading && <Loading />}
      <div>
        <div className="row">{displayEvolutionChain()}</div>
        <button onClick={showPokemon}>Back</button>
      </div>
    </div>
  );
};

export default Evolution;
