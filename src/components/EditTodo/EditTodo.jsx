import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContext";

const EditTodo = () => {
  const navigate = useNavigate();
  const { taskToEdit, saveTask } = useContext(todoContext);
  const [newEditItem, setNewEditItem] = useState(taskToEdit);

  useEffect(() => setNewEditItem(taskToEdit), [taskToEdit]);

  function handleEditInput(e) {
    let newTask = {
      ...newEditItem,
      task: e.target.value,
    };
    setNewEditItem(newTask);
  }
  function save() {
    saveTask(newEditItem);
    navigate("/");
  }

  return (
    <div>
      {newEditItem ? (
        <>
          <input
            onChange={handleEditInput}
            value={newEditItem.task}
            type="text"
          />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default EditTodo;
