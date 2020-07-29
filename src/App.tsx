import React from "react";
import { TodoListItem } from "./TodoListItem";

//conformed to the todo in TodoListItemProps
type Todo = {
  text: string;
  complete: boolean;
}


const todos = [{text:"Walk the dog", complete: true},
{text: "Write app", complete: false}
]

const App: React.FC = () => {
  return (
    <div>
      <TodoListItem />
    </div>
  );
};

export default App;
