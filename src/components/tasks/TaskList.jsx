import { useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "src/components/taskItem/TaskItem";
import { Button } from "src/components/button/Button";
import "src/components/tasks/TaskList.component.scss";

const TaskList = ({ showTask }) => {
  const tasks = useSelector((state) => state.todos);
  const paginationLimit = 3;
  const [visibleTasks, setVisibleTasks] = useState(paginationLimit);

  function loadMoreTasks() {
    setVisibleTasks((visibleTasks) => visibleTasks + paginationLimit);
  }

  function showLessTasks() {
    setVisibleTasks(paginationLimit);
  }

  return (
    <div className="task-list">
      {tasks.slice(0, visibleTasks).map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
      {visibleTasks < tasks.length && (
        <Button buttonText="Load more" onButtonClick={loadMoreTasks} />
      )}
      {visibleTasks >= tasks.length && visibleTasks > paginationLimit && (
        <button onClick={showLessTasks}>Show less</button>
      )}
    </div>
  );
};

export default TaskList;
