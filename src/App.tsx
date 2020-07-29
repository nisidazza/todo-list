import React from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo } from "./types";

//type of Array that takes a generic Todo
const todos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const App: React.FC = () => {
  return (
    <div>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </div>
  );
};

export default App;
