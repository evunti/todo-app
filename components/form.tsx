import { useState } from "react";

interface Task {
  title: string;
  description: string | null;
  dueDate: string | null;
}

interface TaskFormProps {
  onSubmit: (data: Task) => void;
  onCancel: () => void;
}

function TaskForm({ onSubmit, onCancel }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: Task = { title, description, dueDate };
    console.log(formData);
    onSubmit(formData);
  };
  return (
    <div className="formContent">
      <form onSubmit={handleSubmit}>
        <div className="titleDiv">
          <input
            type="text"
            id="inputform"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title..."
            required
          />
          <button id="cancelTaskButton" type="button" onClick={onCancel}>
            X
          </button>
        </div>

        <div className="decriptionDiv">
          <textarea
            id="descriptiontext"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description..."
          />
        </div>

        <div className="dateDiv">
          <input
            type="date"
            id="inputdate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button type="submit" id="addTaskButton">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
