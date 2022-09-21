import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  //const url = "https://jsonplaceholder.typicode.com/todos";
  const url = "http://localhost:3001/todos";
  const fetchData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => {
        console.log(err);
      });
  };

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

  const onEdit = async (id, updatedTitle) => {
    await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
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
        setTodos((todos) => [...todos, data]);
      });
    // .catch((err) => {
    //   console.log(err);
    // });

    const editTodos = todos.map((todo) => {
      if (todo.id === todo) {
        return { ...todo.id, title: todo.updatedTitle };
      }
      return todo;
    });
    setTodos(editTodos);
  };

  // const toggleComplete = (id) => {
  //   const editTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, completed: !todo.completed };
  //     }
  //     return todo;
  //   });
  //   setTodos(editTodos);
  // };

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

      <Form onCreate={onCreate} />
      <div>
        {todos.map((todo, i) => (
          <List
            id={todo.id}
            key={i}
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
