import { useState } from "react";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
}; 
  const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [completed, setCompleted] = useState(false);
  
    
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

  export default