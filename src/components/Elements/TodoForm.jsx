import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full overflow-hidden flex items-center border border-blue-500"
    >
      <input
        type="text"
        value={value}
        placeholder="Add todolist"
        onChange={(e) => setValue(e.target.value)}
        className="p-2 text-sm w-full bg-transparent text-white"
      />
      <button
        type="submit"
        className="bg-blue-500 p-2 text-sm text-white font-semibold"
      >
        Add
      </button>
    </form>
  );
};
