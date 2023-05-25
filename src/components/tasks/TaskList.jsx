import { useDispatch, useSelector } from "react-redux";
import TaskItem from "src/components/taskItem/TaskItem";
import { Button } from "src/components/button/Button";
import { setNumOfVisibleTasks } from "src/store/actions/numOfVisibleTaskAction";
import "src/components/tasks/TaskList.component.scss";

const TaskList = ({ initialNumOfTasks, tasks, showTask }) => {
  const numOfVisibleTasks = useSelector(
    (state) => state.numOfVisibleTasks.numOfVisibleTasks
  );
  const dispatch = useDispatch();

  function loadMoreTasks() {
    dispatch(
      setNumOfVisibleTasks(
        Math.min(numOfVisibleTasks + initialNumOfTasks, tasks.length)
      )
    );
  }

  function showLessTasks() {
    if (showTask) {
      dispatch(setNumOfVisibleTasks(initialNumOfTasks - 1));
    } else {
      dispatch(setNumOfVisibleTasks(initialNumOfTasks));
    }
  }
  console.log(numOfVisibleTasks === tasks.length);
  return (
    <div className="task-list">
      {tasks.slice(0, numOfVisibleTasks).map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
      {numOfVisibleTasks < tasks.length && (
        <Button buttonText="Load more" onButtonClick={loadMoreTasks} />
      )}
      {numOfVisibleTasks === tasks.length &&
        (showTask
          ? numOfVisibleTasks >= initialNumOfTasks && (
              <button onClick={showLessTasks}>Show less</button>
            )
          : numOfVisibleTasks > initialNumOfTasks && (
              <button onClick={showLessTasks}>Show less</button>
            ))}
    </div>
  );
};

export default TaskList;
