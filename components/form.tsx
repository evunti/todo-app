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
    <div className="FormContainer">
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
            <button id="cancelFormButton" type="button" onClick={onCancel}>
              X
            </button>
          </div>

          <div className="decriptionDivForm">
            <textarea
              id="descriptionTextForm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description..."
            />
          </div>

          <div className="dateDivForm">
            <input
              type="date"
              id="inputdate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <button type="submit" id="SubmitFormButton">
              {initialData ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
