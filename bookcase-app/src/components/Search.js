import React, { useState } from "react";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ color: "red" }}>
        <em>{searchInput && "Keywords Typed:" + searchInput}</em>
      </p>
      <input
        type="text"
        placeholder="Search for a book"
        value={searchInput}
        onChange={handleSubmit}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
