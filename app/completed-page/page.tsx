"use client";
import { useState } from "react";
import TodoItem from "../components/item";
import "./globals.css";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

interface CompletedTasksProps {
  tasks: Task[];
}

function CompletedTasks({ tasks }: CompletedTasksProps) {
  const [completedTasks, setCompletedTasks] = useState<Task[]>(tasks);

  const handleClearHistory = () => {
    setCompletedTasks([]);
  };
  return (
    <div className="pagecontainer">
      <button onClick={handleClearHistory}>Clear History</button>
      <div className="todoItemsContainer">
        {completedTasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
        <h1>404</h1>
      </div>
    </div>
  );
}

export default CompletedTasks;
