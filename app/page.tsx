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
  const [tasks, setTasks] = useState<Task[]>([]);
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
      const newTask: Task = { ...data, id: Date.now() };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    setShowTaskForm(false);
  };

  const handleCancelTask = () => {
    setEditTask(null);
    setShowTaskForm(false);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task: Task) => {
    setEditTask(task);
    setShowTaskForm(true);
  };

  const handleAddTask = () => {
    setEditTask(null);
    setShowTaskForm(true);
  };

  return (
    <div className="PageContainer">
      <div className="AllSubmitedTodoItemsContainer">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => handleEditTask(task)}
            isEditing={editTask?.id === task.id}
            onSubmit={handleFormSubmit}
            onCancel={handleCancelTask}
          />
        ))}
      </div>
      {showTaskForm && !editTask && (
        <TaskForm onSubmit={handleFormSubmit} onCancel={handleCancelTask} />
      )}
      <button id="AddTaskButton" type="button" onClick={handleAddTask}>
        Add New Task
      </button>
    </div>
  );
}

export default AddTask;
