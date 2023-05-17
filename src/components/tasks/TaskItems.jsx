import { useSelector } from "react-redux";
import Buttons from "src/components/buttons/Buttons";
import "src/components/tasks/TaskItems.component.scss";

const TaskItems = () => {
  const tasks = useSelector((state) => state.todos);
  const sortedTasks = [...tasks].reverse();
  return (
    <>
      <ul className="task-list">
        {sortedTasks.length > 0 &&
          sortedTasks.map((task, i) => {
            return (
              <li key={i} className="task-item">
                <h3>{task.content}</h3>
                <p>Created At: {task.createdAt}</p>
                <Buttons />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default TaskItems;
