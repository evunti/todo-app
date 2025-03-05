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
  completed: boolean;
}

function AddTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [showTaskForm, setShowTaskForm] = useState(false);

  const handleFormSubmit = (data: Omit<Task, "id">) => {
    if (editTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editTask.id ? { ...task, ...data } : task
        )
      );
      setEditTask(null);
    } else {
      const newTask: Task = { id: Date.now(), ...data, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    setShowTaskForm(false);
  };

  const handleCancelTask = () => {
    setShowTaskForm(false);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id: number) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditTask(taskToEdit);
      setShowTaskForm(true);
    }
  };
  const handleCompletedTask = (id: number) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    if ()
  }; 

  return (
    <div className="PageContainer">
      <div className="AllSubmitedTodoItemsContainer">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => handleEditTask(task.id)}
            isEditing={editTask?.id === task.id}
            onSubmit={handleFormSubmit}
            onCancel={handleCancelTask}
            onCompleted={() => handleCompletedTask(task.id)}
          />
        ))}
      </div>
      {showTaskForm && !editTask && (
        <TaskForm onSubmit={handleFormSubmit} onCancel={handleCancelTask} />
      )}
      <button
        id="AddTaskButton"
        type="button"
        onClick={() => setShowTaskForm(true)}
      >
        Create Task
      </button>
    </div>
  );
}

export default AddTask;
