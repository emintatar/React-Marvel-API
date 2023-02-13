import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CharacterTable from "./components/CharacterTable";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  async function getItems() {
    try {
      if (query === "") {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH_KEY}`
        );
        console.log(response.data.data.results);
        setItems(response.data.data.results);
        setLoading(false);
      } else {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH_KEY}`
        );
        console.log(response.data.data.results);
        setItems(response.data.data.results);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search search={(q) => setQuery(q)} />
      <CharacterTable items={items} loading={loading} />
    </div>
  );
}

export default App;
