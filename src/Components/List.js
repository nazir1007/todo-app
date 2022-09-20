import React, { useState } from "react";

const List = ({ id, title, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [todos, setTodos] = useState(title);

  const handleDelete = () => {
    onDelete(id);
  };

  const toggleFrom = () => {
    setEdit(!edit);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(title);
    toggleFrom();
  };
  const handleChange = (e) => {
    setTodos(e.target.title);
  };

  const toggleCompleted = (e) => {
    toggleCompleted(e.target.id);
  };

  let result;
  if (edit) {
    result = (
      <div className="d-grid d-md-flex justify-content-md-end">
        <form className="edit-form" onSubmit={handleEdit}>
          <input onChange={handleChange} value={title} type="text" />

          <button type="button" className="btn btn-warning">
            Save
          </button>
        </form>
      </div>
    );
  } else {
    result = (
      <div>
        <ul>
          <li onClick={toggleCompleted}>
            <label htmlFor="">
              {/* <input type="checkbox" id="" /> */}
              {title}
            </label>
            <div className="d-grid d-md-flex justify-content-md-end">
              <button
                onClick={toggleFrom}
                className="btn btn-warning me-md-2"
                type="button"

                //onClick={handleEdit}
              >
                Edit
              </button>

              <button
                className="btn btn-danger"
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  return result;
};

export default List;
