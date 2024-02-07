import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full overflow-hidden flex items-center border border-blue-500 mt-3"
    >
      <input
        type="text"
        className="todo-input p-2 text-sm w-full bg-transparent text-white"
        value={value}
        placeholder="Add Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="todo-btn bg-blue-600 p-2 text-sm text-white font-semibold"
      >
        Update
      </button>
    </form>
  );
};
