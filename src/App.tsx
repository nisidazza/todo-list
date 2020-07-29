import React, { useState } from "react";
import { TodoList } from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Todo, ToggleTodo, AddTodo } from "./types";

//type of Array that takes a generic Todo
const initialTodos: Todo[] = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const App: React.FC = () => {
  //add state
  const [todos, setTodos] = useState(initialTodos);

  //toggles todos
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
