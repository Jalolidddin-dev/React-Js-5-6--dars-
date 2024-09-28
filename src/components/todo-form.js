import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  function formHeandler(e) {
    e.preventDefault();
    if (!inputValue) return;

    addTodo(inputValue);

    setInputValue("");
  }

  return (
    <>
      <form onSubmit={formHeandler}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default TodoForm;
