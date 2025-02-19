import { useState } from "react";

function ToDo() {
  const [task, setTask] = useState([]);
}
export default function Home() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const taskQuery = await fetch("http://localhost:3001/task");
    const taskData = await taskQuery.json();
    setTasks(taskData);
  };

  const createTask = async () => {
    const body = JSON.stringify({});
  };

  // return jsx

  return <div></div>;
}
