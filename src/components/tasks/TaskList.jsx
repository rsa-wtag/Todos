import { useDispatch, useSelector } from "react-redux";
import TaskItem from "src/components/taskItem/TaskItem";
import { Button } from "src/components/button/Button";
import { setNumOfVisibleTasks } from "src/store/actions/numOfVisibleTaskAction";
import "src/components/tasks/TaskList.component.scss";

const TaskList = ({ initialNumOfTasks, tasks }) => {
  const numOfVisibleTasks = useSelector(
    (state) => state.numOfVisibleTasks.numOfVisibleTasks
  );
  const dispatch = useDispatch();

  function loadMoreTasks() {
    dispatch(setNumOfVisibleTasks(numOfVisibleTasks + initialNumOfTasks));
  }

  function showLessTasks() {
    dispatch(setNumOfVisibleTasks(initialNumOfTasks));
  }

  return (
    <div className="task-list">
      {tasks.slice(0, numOfVisibleTasks).map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
      {numOfVisibleTasks < tasks.length && (
        <Button buttonText="Load more" onButtonClick={loadMoreTasks} />
      )}
      {numOfVisibleTasks >= tasks.length &&
        numOfVisibleTasks > initialNumOfTasks && (
          <button onClick={showLessTasks}>Show less</button>
        )}
    </div>
  );
};

export default TaskList;
