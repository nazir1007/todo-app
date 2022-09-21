// --- importing useState Hook --- //
import React, { useState } from "react";

const List = ({ id, title, onDelete, onEdit }) => {
  // --- useState Hook --- //
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState(title);

  // --- handleDelete for deleting data --- //
  const handleDelete = () => {
    onDelete(id);
  };

  // --- toggleForm for form --- //
  const toggleFrom = () => {
    setEdit(!edit);
  };

  // --- handleEdit for editing data ---//
  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(id, todo);
    toggleFrom();
  };

  // --- handleChange for changing data --- //
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  let result;
  if (edit) {
    result = (
      <div>
        {/*  ---- form  for editing data --- */}
        <form className="edit-form" onSubmit={handleEdit}>
          <input onChange={handleChange} value={todo} type="text" />
          <div className="d-grid d-md-flex justify-content-md-end">
            {/* --- update button for updating data after editing --- */}
            <button className="btn btn-success me-md-2" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    result = (
      <div>
        <ul>
          <li>
            <label htmlFor="">{title}</label>
            <div className="d-grid d-md-flex justify-content-md-end">
              {/* --- edit button for editing data ---  */}
              <button
                onClick={toggleFrom}
                className="btn btn-warning me-md-2"
                type="button"
              >
                Edit
              </button>

              {/* --- delete button for deleting data --- */}
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
