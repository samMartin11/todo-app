import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Redux/actions";

const AddTodo = ({ addTask }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addTask(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ADD new Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">ADD TASK</button>
      </form>
    </div>
  );
};

export default connect(null, { addTask })(AddTodo);
