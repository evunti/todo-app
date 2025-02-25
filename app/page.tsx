"use client";
import "./globals.css";

import { useState } from "react";
import TaskForm from "../components/form";
import TodoItem from "../components/item";

interface Task {
  title: string;
  description: string | null;
  dueDate: string | null;
}
function AddTask() {
  const [taskWindow, setTaskWindow] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // const [taskData, setTaskData] = useState(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleFormSubmit = (data: Task) => {
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
      </button> */}
      <button id="button" type="button" onClick={handleAddTask}>
        Add Task
      </button>
      {taskWindow && (
        <div className="taskFormContainer">
          <TaskForm onSubmit={handleFormSubmit} onCancel={handleCancelTask} />
        </div>
      )}
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
