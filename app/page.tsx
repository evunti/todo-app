"use client";
import "./globals.css";

import { useState } from "react";
import TaskForm from "../components/form";
import TodoItem from "../components/item";
function AddTask() {
  const [taskWindow, setTaskWindow] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };
  return (
    <div className="pagecontainer">
      <button id="button" type="button" onClick={() => setTaskWindow(true)}>
        Add Task
      </button>
      {taskWindow && !formSubmitted ? (
        <div className="taskFormContainer">
          <TaskForm onSubmit={handleFormSubmit} />
        </div>
      ) : null}
      <div>
        <TodoItem />
      </div>
    </div>
  );
}
// addTodo function
// editTodoItem function
// deleteTodoItem fun

export default AddTask;
