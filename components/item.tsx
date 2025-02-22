import TaskForm from "./form";
import { useState } from "react";

function TodoItem({ title, description, dueDate }) {
  const [completed, setCompleted] = useState(false);

  const handleEdit = () => {};

  const deleteTodoItem = () => {};

  return (
    <div>
      <input type="checkbox" checked={completed} readOnly />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Due: {dueDate}</p>
      {/* <button id="editbutton" onClick={handleEdit}>
        Edit
      </button>
      <button id="deletebutton" onClick={() => deleteTodoItem(id)}>
        Delete
      </button> */}
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
