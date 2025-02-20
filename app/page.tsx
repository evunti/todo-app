"use client";

import { use, useState } from "react";
import TaskForm from "../components/form";

function AddTask() {
  const [taskWindow, setTaskWindow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setTaskWindow(true)}>
        Add Task
      </button>
      {taskWindow ? (
        <div>
          <TaskForm />
        </div>
      ) : null}
    </div>
  );
}
// addTodo function
// editTodoItem function
// deleteTodoItem fun

export default AddTask;
