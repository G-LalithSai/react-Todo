import React from "react";

const TodoItems = ({ todo }) => {
  return (
    <>
      <div className="task-item">
        {todo}
        <span>
          <input type="radio" />
        </span>
      </div>
    </>
  );
};

export default TodoItems;
