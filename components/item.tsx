import { useState } from "react";
import TaskForm from "./form";

interface Task {
  id: number;
  title: string;
  description: string | null;
  dueDate: string | null;
}

interface TodoItemProps {
  task: Task;
  onDelete: () => void;
  onEdit: () => void;
  isEditing: boolean;
  onSubmit: (data: Omit<Task, "id">) => void;
  onCancel: () => void;
}

function TodoItem({
  task,
  onDelete,
  onEdit,
  isEditing,
  onSubmit,
  onCancel,
}: TodoItemProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="ItemContainer">
      {isEditing ? (
        <TaskForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          initialData={{
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
          }}
        />
      ) : (
        <div>
          <div className="titleDiv">
            <input id="checkbox" type="checkbox" />
            <h3 id="itemTitle">{task.title}</h3>
            <div className="dropdown">
              <button id="optionsButton" onClick={toggleDropdown}>
                ...
              </button>
              <div
                className={`dropdownContent ${
                  dropdownVisible ? "visible" : ""
                }`}
              >
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
              </div>
            </div>
          </div>
          <div className="decriptionDivItem">
            <p>{task.description}</p>
          </div>
          <div className="dateItemDiv">
            <p>Due: {task.dueDate}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
