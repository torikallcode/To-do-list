import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplate, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center mt-3 bg-blue-600 p-2 rounded-md">
      <p
        onClick={() => toggleComplate(task.id)}
        className={`text-white ${task.complate ? "line-through" : ""}`}
      >
        {task.task}
      </p>
      <div className="text-white gap-x-3 flex">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  )
}