import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please Enter The Task");
      return;
    }
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  const completeHandler = (indexValue) => {
    const completedTask = todos[indexValue];
    const newCompletedTodos = [...completedTodos, completedTask];
    setCompletedTodos(newCompletedTodos);
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">To-Do List Application</h5>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
                placeholder="Enter the task"
              />
              &nbsp;&nbsp;
              <input size="50" type="submit" value="Add" name="Add" />
            </form>
            <TodoList
              todolist={todos}
              deleteHandler={deleteHandler}
              completeHandler={completeHandler}
              completedTodos={completedTodos}
            />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
