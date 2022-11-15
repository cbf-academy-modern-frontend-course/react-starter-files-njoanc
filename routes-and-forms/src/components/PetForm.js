import React, { useState } from "react";
import Button from "./Button";

const PetForm = () => {
  const [inputs, setInputs] = useState({});
  const [hasSubmitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Pet's Name:
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Pet's Age:
            <input
              type="text"
              name="age"
              value={inputs.age}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />

          <label>
            Pet's Colors:
            <input
              type="text"
              name="colors"
              value={inputs.colors}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
        </div>
        {/* <input type="submit" value="Submit" id="submit-button" /> */}
        <Button id="submit-button" type="submit" text="Submit" />
        {/* <button id="submit-button" type="submit">
          Submit
        </button> */}
      </form>
      {hasSubmitted === true && <p>Thank you for submitting</p>}
      <div id="results">
        <h3>Results</h3>
        Name: {inputs.name}
        <br />
        Age: {inputs.age}
        <br />
        Colors:{inputs.colors}
        <br />
      </div>
    </div>
  );
};

export default PetForm;
