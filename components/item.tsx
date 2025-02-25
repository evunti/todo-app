// import TaskForm from "./form";
// import { useState } from "react";

interface TodoItemProps {
  title: string;
  description: string | null;
  dueDate: string | null;
}

function TodoItem({ title, description, dueDate }: TodoItemProps) {
  // const [completed, setCompleted] = useState(false);

  // const handleEdit = () => {};

  // const deleteTodoItem = () => {};

  return (
    <div className="todoItemContainer">
      <div className="titleDiv">
        {/* <input id="checkbox" type="checkbox" checked={completed} /> */}

        <h3 id="itemTitle">{title}</h3>
        <button id="optionsButton">...</button>
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
