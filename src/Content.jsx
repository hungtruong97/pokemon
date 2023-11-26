/* eslint-disable */
import Pokemon from "./Pokemon";

const Content = ({ hidden, data, searchType }) => {
  return (
    <div>
      {/* Handle find pokemon */}
      {searchType === "pokemon" && <Pokemon pokemon={data} />}

      {/* Handle find item */}
      {searchType === "item" && (
        <div className="content">
          <h2> Your item is {data.name}</h2>
          <img src={data.sprites.default} />
        </div>
      )}
    </div>
  );
};

export default Content;
