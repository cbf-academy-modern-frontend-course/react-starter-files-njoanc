import React, { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [colors, setColors] = useState([]);
  const [hasSubmitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
    setSubmitted(false);
  };
  const handleAgeChange = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
    setSubmitted(false);
  };

  const handleColorsChange = (event) => {
    console.log(event.target.value);
    setColors(event.target.value);
    setSubmitted(false);
  };

  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Pet's Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <br />
          <label>
            Pet's Age:
            <input type="text" value={age} onChange={handleAgeChange} />
          </label>
          <br />
          <br />
          <label>
            Pet's Colors:
            <input type="text" value={colors} onChange={handleColorsChange} />
          </label>
        </div>
        <input type="submit" value="Submit" id="submit-button" />
      </form>
      {hasSubmitted === true && <p>Thank you for submitting</p>}
      <div id="results">
        <h3>Results</h3>
        Name: {name}
        <br />
        Age: {age}
        <br />
        <p>Colors:{colors}</p>
        <br />
      </div>
    </div>
  );
};

export default PetForm;
