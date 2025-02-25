"use client";
import "./globals.css";

import { useState } from "react";
import TaskForm from "../components/form";
import TodoItem from "../components/item";

function AddTask() {
  const [taskWindow, setTaskWindow] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // const [taskData, setTaskData] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (data) => {
    // setFormSubmitted(true);
    // setTasks(...tasks, data);
    setTasks((prevTasks) => [...prevTasks, data]);
    setTaskWindow(false);
  };
  const handleCancelTask = () => {
    setTaskWindow(false);
  };
  const handleAddTask = () => {
    // setFormSubmitted(false);
    setTaskWindow(true);
  };
  return (
    <div className="pagecontainer">
      {/* <button id="button" type="button" onClick={() => setTaskWindow(true)}>
        Add Task
      </button> */}{" "}
      <button id="button" type="button" onClick={handleAddTask}>
        Add Task
      </button>
      {taskWindow ? (
        <div className="taskFormContainer">
          <TaskForm onSubmit={handleFormSubmit} onCancel={handleCancelTask} />
        </div>
      ) : null}
      {/* {formSubmitted && taskData ? (
        <div className="taskFormContainer">
          <TodoItem key={index} {...taskData} />
        </div>
      ) : null} */}
      <div className="todoItemsContainer">
        {tasks.map((task, index) => (
          <TodoItem key={index} {...task} />
        ))}
      </div>
    </div>
  );
}

// editTodoItem function
// deleteTodoItem fun

export default AddTask;
