import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterTable = ({ items, loading }) => {
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="contents">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CharacterTable;
