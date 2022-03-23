import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import Home from "./components/Home/Home";
import TodoList from "./components/TodoList/TodoList";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddTodo />} />
        <Route exact path="/list" element={<TodoList />} />
        <Route exact path="/edit" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
