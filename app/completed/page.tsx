"use client";
// import "./globals.css";
import { useState } from "react";
import TodoItem from "../../components/item";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

interface CompletedTasksProps {
  tasks: Task[];
}

function CompletedTasks({ tasks }: CompletedTasksProps) {
  const [completedTasks, setCompletedTasks] = useState<Task[]>(tasks);

  const handleClearHistory = () => {
    setCompletedTasks([]);
  };
  return (
    <div className="pagecontainer">
      <button onClick={handleClearHistory}>Clear History</button>
      <div className="todoItemsContainer">
        {completedTasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
        <h1>404</h1>
      </div>
    </div>
  );
}

export default CompletedTasks;

// function Page() {
//   const [getTasks, setGetTasks] = useState([]);

//   return (
//     <div className="pagecontainer">
//       <div className="todoItemsContainer">
//         {/* {tasks.map((task, index) => (
//             <TodoItem key={index} {...task} />
//           ))} */}
//       </div>
//     </div>
//   );
// }

// export default Page;
