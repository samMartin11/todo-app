import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}
export default App;
