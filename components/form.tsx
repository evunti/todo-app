import { useState } from "react";

function TaskForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, description, dueDate };
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
