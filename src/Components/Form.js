import axios from "axios";
import { React, useState } from "react";

const Form = ({ data, setData }) => {
  const [todos, setTodos] = useState("");

  //const header = { "Access-Control-Allow-origin": "'" };

  //const url = "https://jsonplaceholder.typicode.com/todos";
  const url = "http://localhost:3000/todos";
  const handleCreate = (e) => {
    e.preventDefault();
    const payload = {
      title: todos,
      completed: false,
      userId: 1,
    };
    axios.post(url, payload);
    setData([...data, payload]);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="todos"
          required
          placeholder="Enter your task"
          onChange={(e) => setTodos(e.target.value)}
        />
        <button type="submit" onClick={handleCreate}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
