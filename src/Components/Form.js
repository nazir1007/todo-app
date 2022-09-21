import React from "react";

const Form = ({ onCreate }) => {
  //  --- handleCreate for Creating data --- //
  const handleCreate = (e) => {
    e.preventDefault();
    onCreate(e.target.title.value);
    e.target.title.value = "";
  };

  return (
    <div>
      {/* --- form for entering task --- */}
      <form onSubmit={handleCreate}>
        <input
          type="text"
          name="title"
          required
          placeholder="Enter your task"
        />
        <div className="d-grid d-md-flex justify-content-md-end">
          {/* -- create Button --- */}
          <button
            className="btn btn-secondary me-md-2"
            type="submit"
            onSubmit={handleCreate}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
