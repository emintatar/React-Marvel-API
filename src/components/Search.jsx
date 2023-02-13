import React, { useState } from "react";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    search(text);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Find a character"
          autoFocus
          onChange={handleChange}
          value={text}
        />
      </form>
    </section>
  );
};

export default Search;
