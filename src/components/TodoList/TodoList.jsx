import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContext";

const TodoList = () => {
  const { todos, getTodosData, changeStatus } = useContext(todoContext);
  useEffect(() => {
    console.log("useEffect");
    getTodosData();
  }, []);

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className={item.status ? "completed" : ""}>
          <input type="checkbox" onChange={() => changeStatus(item.id)} />
          {item.task}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
