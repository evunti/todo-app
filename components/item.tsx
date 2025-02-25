// import TaskForm from "./form";
import { useState } from "react";

interface TodoItemProps {
  title: string;
  description: string | null;
  dueDate: string | null;
  onDelete: () => void;
}

function TodoItem({ title, description, dueDate, onDelete }: TodoItemProps) {
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
        {/* <input id="checkbox" type="checkbox" checked={completed} /> */}

        <h3 id="itemTitle">{title}</h3>
        {/* <button id="optionsButton">...</button> */}
        {/* <div className="dropdown">
          <button id="optionsButton">...</button>
          <div className="dropdownContent">
            <button>Edit</button>
            <button>Delete</button>
          </div> */}
        <div className="dropdown">
          <button id="optionsButton" onClick={toggleDropdown}>
            ...
          </button>
          <div
            className={`dropdownContent ${dropdownVisible ? "visible" : ""}`}
          >
            <button>Edit</button>
            <button onClick={onDelete}>Delete</button>
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
