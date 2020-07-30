import React from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo, ToggleTodo } from "./types";
import "./TodoList.css"

interface TodoListProps {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
  return (
    <ul className="list pt-3">
      {todos.map(todo => {
        return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
};
