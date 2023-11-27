/* eslint-disable */

const Item = ({ item }) => {
  return (
    <div className="item">
      <h2> Your item is {item.name}</h2>
      <img src={item.sprites.default} />
    </div>
  );
};

export default Item;
