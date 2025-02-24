import TaskForm from "./form";
import { useState } from "react";

function TodoItem({ title, description, dueDate }) {
  const [completed, setCompleted] = useState(false);

  // const handleEdit = () => {};

  // const deleteTodoItem = () => {};

  return (
    <div className="todoItemaContainer">
      <div className="todoItemContainer">
        <div className="titleDiv">
          <input id="checkbox" type="checkbox" checked={completed} />

          <h3 id="itemTitle">{title}</h3>
          <button id="optionsButton">...</button>
        </div>
        <div className="decriptionItemDiv">
          <p>{description}</p>
        </div>

        <div className="dateItemDiv">
          <p>Due: {dueDate}</p>
        </div>
        {/* <button id="editbutton" onClick={handleEdit}>
        Edit
      </button>
      <button id="deletebutton" onClick={() => deleteTodoItem(id)}>
        Delete
      </button> */}
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
