import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ input }) => {
  let taskId = 0;
  return (
    <div>
      <div className="task-list">
        {input.map((task) => (
          <div key={taskId++}>
            <TodoItems todo={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
