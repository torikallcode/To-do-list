import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"
uuidv4()

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                task: todo,
                complated: false,
                isEditing: false,
            }
        ])
    }

    const toggleComplate = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, complated: !todo.complated } : todo
            )
        )
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        )
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        )
    }

    return (
        <div className="bg-slate-800 h-full w-full max-w-[22rem] p-11 rounded-lg">
            <h1 className="font-semibold text-white text-center mb-5 text-xl">Your todoList</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={index}
                        task={todo}
                        toggleComplate={toggleComplate}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            )}
        </div>
    )
}