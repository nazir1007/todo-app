import React, { useState } from "react";

const List = ({ id, title, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState(title);

  const handleDelete = () => {
    onDelete(id);
  };

  const toggleFrom = () => {
    setEdit(!edit);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(todo);
    toggleFrom();
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  let result;
  if (edit) {
    result = (
      <div className="d-grid d-md-flex justify-content-md-end">
        <form className="edit-form" onSubmit={handleEdit}>
          <input onChange={handleChange} value={todo} type="text" />

          <button type="submit" className="btn btn-warning">
            Save
          </button>
        </form>
      </div>
    );
  } else {
    result = (
      <div>
        <ul>
          <li>
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
