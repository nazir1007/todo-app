// -----Importing useState and useEffect Hooks   -----//
import React, { useState, useEffect } from "react";

// ---- importing Form.js file  ---//
import Form from "./Form";

// ---- importing List.js file  ---//
import List from "./List";

const App = () => {
  //---  useState Hook  ---//
  const [todos, setTodos] = useState([]);

  // --- useEffect hook   ---//
  useEffect(() => {
    fetchData();
  }, []);

  //--- api Link  --- //
  const url = "https://jsonplaceholder.typicode.com/todos";

  // ---- fetching Data from Api  --- //
  const fetchData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => {
        console.log(err);
      });
  };

  // --- onCreate for creating data  --- //
  const onCreate = async (title) => {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setTodos((todos) => [...todos, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // --- onEdit for editing data --- //
  const onEdit = async (id, updatedTitle) => {
    await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: updatedTitle,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        const editTodos = todos.map((todo) => {
          if (todo.id === data.id) {
            return { ...todo, title: data.title };
          }
          return todo;
        });
        setTodos(editTodos);
      });
  };

  // --- onDelete for deleting data --- //
  const onDelete = async (id) => {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setTodos(
            todos.filter((todo) => {
              return todo.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h2>TODO APP</h2>
      {/* --- Form Component --- */}
      <Form onCreate={onCreate} />
      <div>
        {todos.map((todo) => (
          // --- List Component --- //
          <List
            id={todo.id}
            key={todo.id}
            title={todo.title}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
