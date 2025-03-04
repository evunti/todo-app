// import TaskForm from "./form";
import { useState } from "react";
// import TaskForm from "./form";

interface TodoItemProps {
  title: string;
  description: string | null;
  dueDate: string | null;
  onDelete: () => void;
  onEdit: () => void;
}

function TodoItem({
  title,
  description,
  dueDate,
  onDelete,
  onEdit,
}: TodoItemProps) {
  // const isEditing = true;

  // const [completed, setCompleted] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // const handleEdit = () => {};

  // const deleteTodoItem = () => {};
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="todoItemContainer">
      <div className="titleDiv">
        <input id="checkbox" type="checkbox" />
        <h3 id="itemTitle">{title}</h3>
        <div className="dropdown">
          <button id="optionsButton" onClick={toggleDropdown}>
            ...
          </button>
          <div
            className={`dropdownContent ${dropdownVisible ? "visible" : ""}`}
          >
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit</button>
          </div>
        </div>
      </div>
      <div className="decriptionItemDiv">
        <p>{description}</p>
      </div>

      <div className="dateItemDiv">
        <p>Due: {dueDate}</p>
      </div>
    </div>
  );
}
// const handleEdit = () =>{

// }

// // return (
// //   <div>
// //     <input type="checkbox" checked={completed} />
// //     <h3>{title}</h3>
// //     <p>{description}</p>
// //     <p>Due: {dueDate}</p>
// //     <button onClick={handleEdit}>Edit</button>
// //     <button onClick={() => deleteTodoItem(id)}>Delete</button>
// //   </div>
// // )

export default TodoItem;
