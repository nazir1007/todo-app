import { React, useState, useEffect } from "react";
import axios from "axios";

const List = ({ data, setData }) => {
  // const header = { "Access-Control-Allow-origin": "'" };

  // const url = "https://jsonplaceholder.typicode.com/todos";
  const url = "http://localhost:3000/todos";
  const getData = () => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      getData();
    });
  };

  const handleUpdate = (newtodos, id) => {
    axios.put(`${url}/${id}`, {
      body: JSON.stringify(newtodos),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <ul>
        {data.map((eachData) => {
          return (
            <>
              <li>
                <label htmlFor="">
                  <input type="checkbox" id="" />
                  {eachData.title}
                </label>
                <div className="btn">
                  <button id="edit" type="button" onClick={handleUpdate}>
                    Edit
                  </button>
                  <button
                    type="button"
                    id="delete"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
