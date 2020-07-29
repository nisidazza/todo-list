import React, { useState } from "react";

const AddTodoForm: React.FC = () => {

  const [newTodo, setNewTodo] = useState("");
  
  return (
    <form>
      <input type="text" value={newTodo}/>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
