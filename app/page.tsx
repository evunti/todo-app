import { useEffect, useState } from "react";

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

  // useeffect
  useEffect(() => {
    getTasks();
  });

  // return jsx

  return <div></div>;
}

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
  };
  return (
    <div>
      <p>Add Task</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          required
        />
        <label>
          Completed:
          <input
            type="checkbox"
            checked={completed}
            onChange={(event) => setCompleted(event.target.checked)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};
