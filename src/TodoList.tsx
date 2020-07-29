import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = (todos, toggleTodo) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoListItem todo={todo} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
};
