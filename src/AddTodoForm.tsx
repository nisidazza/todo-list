import React, { useState, ChangeEvent, FormEvent } from "react";
import {AddTodo} from "./types";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="input-group col-4">
      <input className="form-control" type="text" value={newTodo} onChange={handleChange} />
      <button className="btn btn-info p-1 ml-1" type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
