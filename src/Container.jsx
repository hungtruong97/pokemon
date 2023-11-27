/* eslint-disable */

import Evolution from "./Evolution";
import Loading from "./Loading";
import Pokemon from "./Pokemon";
import Item from "./Item";
import { useEffect, useState } from "react";

const Container = ({ data, searchType, hidden, isLoading, fetchData }) => {
  const [displayState, setDisplayState] = useState("pokemon"); //pokemon, item, evolution, none

  useEffect(() => {
    setDisplayState("pokemon");
  }, [data]);

  const showEvolution = () => {
    setDisplayState("evolution");
  };

  const showPokemon = () => {
    setDisplayState("pokemon");
  };

  const showItem = () => {
    setDisplayState("item");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      {!hidden && searchType === "pokemon" && data && (
        <div>
          {displayState === "pokemon" && (
            <Pokemon
              pokemon={data}
              showEvolution={showEvolution}
              showPokemon={showPokemon}
            />
          )}
          {displayState === "evolution" && (
            <Evolution
              data={data}
              showEvolution={showEvolution}
              showPokemon={showPokemon}
              fetchData={fetchData}
            />
          )}
        </div>
      )}

      {searchType === "item" && data && <Item item={data} />}

      {!hidden && !data && (
        <div className="error">
          <h2> Sorry, we can't find that {searchType}.</h2>
        </div>
      )}
    </div>
  );
};

export default Container;
