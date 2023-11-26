/* eslint-disable */
const Content = ({ hidden, data, searchType }) => {
  return (
    <div>
      {/* Handle find pokemon */}
      {searchType === "pokemon" && (
        <div className="content">
          <h2> Your pokemon is {data.name}</h2>
          <img src={data.sprites.other["official-artwork"].front_default} />
          <div className="info">
            <p>ID: {data.id}</p>
            <p>Height: {data.height * 10} cm</p>
            <p>Weight: {data.weight / 10} kg</p>
            <p>Type: {data.types[0].type.name}</p>
            <p>
              {" "}
              Abilities:{" "}
              {data.abilities.map((item, index) => (
                <span key={index}>
                  {item.ability.name}
                  {index !== data.abilities.length - 1 ? "," : ""}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}

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
