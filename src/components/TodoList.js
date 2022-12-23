import React from "react";

const TodoList = ({
  todolist,
  deleteHandler,
  completeHandler,
  completedTodos,
}) => {
  return (
    <div>
      {todolist.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo} &nbsp;
            <button onClick={() => deleteHandler(index)}>Delete</button> &nbsp;
            <button onClick={() => completeHandler(index)}>Complete</button>
          </h5>
        </div>
      ))}

      <div>
        <h5>Completed Tasks:</h5>
        {completedTodos.map((todo, index) => (
          <div key={index}>
            <h5 style={{ color: "gray" }}>{todo}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
