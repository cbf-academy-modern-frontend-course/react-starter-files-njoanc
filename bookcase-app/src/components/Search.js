import React, { useState } from "react";
import "../index.css";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <p style={{ color: "red" }}>
        <em>{searchInput && "Keywords Typed:" + searchInput}</em>
      </p>
      <input
        type="text"
        placeholder="Enter name, author, keyword or genre..."
        value={searchInput}
        onChange={handleSubmit}
      />

      <button type="submit" className="find">
        Find
      </button>
    </form>
  );
};

export default Search;
