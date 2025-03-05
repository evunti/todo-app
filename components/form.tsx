import { useState, useEffect } from "react";

interface Task {
  id: number;
  title: string;
  description: string | null;
  dueDate: string | null;
}

type TaskFormProps = {
  onSubmit: (data: Omit<Task, "id">) => void;
  onCancel: () => void;
  initialData?: Omit<Task, "id"> | null;
};

function TaskForm({ onSubmit, onCancel, initialData }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description || "");
      setDueDate(initialData.dueDate || "");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { title, description, dueDate };
    onSubmit(formData);
  };

  return (
    <div className="taskFormContainer">
      <div className="formContent">
        <form onSubmit={handleSubmit}>
          <div className="titleDiv">
            <input
              autoFocus
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
            <button type="submit" id="SubmitTaskButton">
              {initialData ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
