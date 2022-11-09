import React from "react";

export function Profile(props) {
  if (props.name === "Liz") {
    return (
      <main id="content" role="main" className="base">
        <h1>{props.name}'s React Page</h1>
        <p>{props.bio}</p>
      </main>
    );
  } else {
    return (
      <main id="content" role="main" className="base">
        <h1>Just a React Page</h1>
        <p>Nothing to see here!</p>
      </main>
    );
  }
}
