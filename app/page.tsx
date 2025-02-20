"use client";

import { use, useState } from "react";

function AddTask() {
  const [taskWindow, setTaskWindow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setTaskWindow(true)}>
        Add Task
      </button>
      {taskWindow ? (
        <div>
          <p>ADD TASK</p>
        </div>
      ) : null}
    </div>
  );
}
// addTodo function
// editTodoItem function
// deleteTodoItem fun

export default AddTask;
