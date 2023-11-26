/* eslint-disable */

import { useState } from "react";

const Search = ({ handleClick, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");

  const onSearchClick = () => {
    handleSearch({ searchTerm, searchType });
  };

  const onSelectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="search">
      <div>
        <div>
          <h2>You want to search by?</h2>
          <div>
            <input
              type="radio"
              value="pokemon"
              id="pokemon"
              name="searchType"
              onChange={onSelectSearchType}
            />
            <label htmlFor="pokemon">Pokemon ID or name</label>
          </div>
          <div>
            <input
              type="radio"
              value="item"
              id="item"
              name="searchType"
              onChange={onSelectSearchType}
            />
            <label htmlFor="item">Item ID or name</label>
          </div>
        </div>

        <input
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button onClick={onSearchClick}>Search</button>
      </div>
      <div className="close-button" onClick={handleClick}>
        x
      </div>
    </div>
  );
};

export default Search;
