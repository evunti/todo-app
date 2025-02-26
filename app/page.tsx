"use client";
import "./globals.css";

import { useState } from "react";
import TaskForm from "../components/form";
import TodoItem from "../components/item";

interface Task {
  id: number;
  title: string;
  description: string | null;
  dueDate: string | null;
}
function AddTask() {
  const [taskWindow, setTaskWindow] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // const [taskData, setTaskData] = useState(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleFormSubmit = (data: Omit<Task, "id">) => {
    const newTask: Task = { ...data, id: Date.now() }; // Assign a unique id
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskWindow(false);
  };
  // const handleFormSubmit = (data: Task) => {

  //   setTasks((prevTasks) => [...prevTasks, data]);
  //   setTaskWindow(false);
  // };
  const handleCancelTask = () => {
    setTaskWindow(false);
  };
  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const handleEditTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
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
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => handleEditTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

// editTodoItem function
// deleteTodoItem fun

export default AddTask;
