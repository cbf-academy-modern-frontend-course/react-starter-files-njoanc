import React from "react";

function Task({ id, isComplete, title, toggleComplete }) {
  // function toggleComplete(id) {
  //   console.log(`Task with the id '${id}' was clicked`);
  // }
  return (
    <div className={"task" + (isComplete ? " checked" : "")}>
      <span>{title}</span>
      <span className="status" onClick={() => toggleComplete(id)}>
        {isComplete ? "✔️" : "🔘"}
      </span>
    </div>
  );
}
export default Task;
