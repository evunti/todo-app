import { useState } from "react";
import TaskForm from "./form";

interface Task {
  id: number;
  title: string;
  description: string | null;
  dueDate: string | null;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  onDelete: () => void;
  onEdit: () => void;
  isEditing: boolean;
  onSubmit: (data: Omit<Task, "id">) => void;
  onCancel: () => void;
  onCompleted: () => void;
}

function TodoItem({
  task,
  onDelete,
  onEdit,
  isEditing,
  onSubmit,
  onCancel,
  onCompleted,
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
            completed: task.completed,
          }}
        />
      ) : (
        <div>
          <div className="titleDiv">
            <input
              id="checkbox"
              type="checkbox"
              checked={task.completed}
              onChange={onCompleted}
            />
            <h3 id="titleItem">{task.title}</h3>
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
