import React, { useState } from "react";
import TodoList from "./TodoList";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div className="todo">
      <div>
        <TodoList input={todo} />
      </div>
      <div className="input-section">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTodo([...todo, task]);
            setTask("");
          }}
        >
          <input
            className="input-box"
            type="text"
            placeholder="Write Something"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input type="submit" value="+" className="input-submit" />
        </form>
      </div>
    </div>
  );
};

export default Todo;
