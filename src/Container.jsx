/* eslint-disable */

import Content from "./Content";
import Evolution from "./Evolution";
import Loading from "./Loading";
import { useState } from "react";

const Container = ({ data, searchType, hidden, isLoading }) => {
  const [isShowData, setIsShowData] = useState(true);
  const [isShowEvolution, setIsShowEvolution] = useState(false);

  const handleShowEvolution = () => {
    setIsShowEvolution(!isShowEvolution);
    setIsShowData(!isShowData);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      {searchType === "pokemon" &&
        !hidden &&
        isShowData &&
        (data ? (
          <div>
            <Content data={data} searchType={searchType} hidden={hidden} />
            <button onClick={handleShowEvolution}>Show its evolution</button>
          </div>
        ) : (
          <div className="error">
            <h2> Sorry, we can't find that pokemon.</h2>
          </div>
        ))}

      {searchType === "item" &&
        !hidden &&
        isShowData &&
        (data ? (
          <div>
            <Content data={data} searchType={searchType} hidden={hidden} />
          </div>
        ) : (
          <div className="error">
            <h2> Sorry, we can't find that item.</h2>
          </div>
        ))}

      {isShowEvolution && (
        <Evolution handleBackButton={handleShowEvolution} data={data} />
      )}
    </div>
  );
};

export default Container;
