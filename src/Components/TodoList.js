import React from "react";
import { connect } from "react-redux";
import { deleteTask, editTask, doneTask } from "../Redux/actions";

const TodoList = ({ todos, deleteTask, editTask }) => {
  const handleEdit = (id, text) => {
    const newText = prompt("EDIT TASK ->", text);
    if (newText) {
      editTask(id, newText);
    }
  };
  const handleDone = (id) => {
    doneTask(id);
  };
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
            <button onClick={() => handleDone(todo.id)}>Done</button>
          </li>
        ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  completed: state.todos.completed,
});

export default connect(mapStateToProps, { deleteTask, editTask, doneTask })(TodoList);
