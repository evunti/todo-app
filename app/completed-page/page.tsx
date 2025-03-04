"use client";

import { useState } from "react";

// import { useState } from "react";
// import TodoItem from "../components/item";

// interface Task {
//   id: number;
//   title: string;
//   description: string;
//   dueDate: string;
//   completed: boolean;
// }

// interface CompletedTasksProps {
//   tasks: Task[];
// }

function CompletedTasks() {
  const [getTasks, setGetTasks] = useState([]);

  return (
    <div>
      <div className="pagecontainer">
        <div className="todoItemsContainer">
          {/* {tasks.map((task, index) => (
            <TodoItem key={index} {...task} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default CompletedTasks;
