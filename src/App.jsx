import "./index.css";
import { useState, useEffect } from "react";
import Button from "./Button";
import Search from "./Search";
import axios from "axios";
import Container from "./Container";

export default function App() {
  const numberOfPokemon = 1017;
  const [data, setData] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [id, setId] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [type, setType] = useState("pokemon");
  const [isLoading, setIsLoading] = useState(false);
  const generateRandomId = () => {
    setId(Math.floor(Math.random() * numberOfPokemon));
  };

  useEffect(() => {
    if (id !== null) {
      setIsLoading(true);
      fetchData(id).then(() => setIsLoading(false));
    }
  }, [id]);

  const fetchData = async (params, searchType = "pokemon") => {
    try {
      const response = await axios.get(
        searchType === "pokemon"
          ? `https://pokeapi.co/api/v2/pokemon/${params}/`
          : `https://pokeapi.co/api/v2/item/${params}/`
      );

      if (response.data) {
        setData(response.data);
        setIsHidden(false);
        setId(response.data.id);
      }
    } catch (error) {
      setData(null);
      setIsHidden(false);
    }
  };

  const clearContent = () => {
    setData(null);
    setIsHidden(true);
  };

  const openSearch = () => {
    clearContent();
    setIsSearch(!isSearch);
    setType("");
  };

  const handleSearch = async ({ searchTerm, searchType }) => {
    setIsLoading(true);
    await fetchData(searchTerm, searchType);
    setIsLoading(false);
  };

  const switchSearchType = (t) => {
    setType(t);
    setIsHidden(true);
    setData(null);
  };

  return (
    <div className="App">
      <header>
        <Button
          label="Clear Content"
          handleClick={clearContent}
          isDisabled={isSearch || isHidden}
        />
        <Button
          label="Generate Random Pokemon"
          handleClick={generateRandomId}
          isDisabled={isSearch}
        />
        <Button label="Search for Pokemon" handleClick={openSearch} />
      </header>
      {isSearch && (
        <Search
          handleClick={openSearch}
          handleSearch={handleSearch}
          switchSearchType={switchSearchType}
        />
      )}
      <Container
        data={data}
        searchType={type}
        hidden={isHidden}
        isLoading={isLoading}
        fetchData={fetchData}
      />
    </div>
  );
}
