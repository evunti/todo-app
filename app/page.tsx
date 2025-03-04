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
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task | null>(null);

  const handleFormSubmit = (data: Omit<Task, "id">) => {
    if (editTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editTask.id ? { ...task, ...data } : task
        )
      );
      setEditTask(null);
    } else {
      const newTask: Task = { ...data, id: Date.now() };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    setShowTaskForm(false);
  };

  const handleCancelTask = () => {
    setShowTaskForm(false);
    setEditTask(null);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task: Task) => {
    setEditTask(task);
    setShowTaskForm(true);
  };
  // const handleFormSubmit = (data: Omit<Task, "id">) => {
  //   const newTask: Task = { ...data, id: Date.now() };
  //   setTasks((prevTasks) => [...prevTasks, newTask]);
  //   setShowTaskForm(false);
  // };

  // const handleCancelTask = () => {
  //   setShowTaskForm(false);
  // };
  // const handleDeleteTask = (id: number) => {
  //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  // };
  // const handleEditTask = (id: number) => {
  //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  // };

  // const handleAddTask = () => {
  //   setShowTaskForm(true);
  // };
  return (
    <div className="pagecontainer">
      <button id="button" type="button" onClick={() => setShowTaskForm(true)}>
        Add Task
      </button>
      {/* <button id="button" type="button" onClick={handleAddTask}>
        Add Task
      </button> */}
      {showTaskForm && (
        <TaskForm
          onSubmit={handleFormSubmit}
          onCancel={handleCancelTask}
          initialData={editTask}
        />
      )}

      <div className="todoItemsContainer">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => handleEditTask(task)}
          />
        ))}
      </div>
    </div>
  );
}

export default AddTask;
