import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateTasks from "src/components/tasks/CreateTasks";
import TaskItems from "src/components/tasks/TaskList";
import CreateButton from "src/components/tasks/CreateButton";
import { addTasks } from "src/store/actions/taskActions";
import "src/components/content/Content.component.scss";

const Content = () => {
  const [showTask, setShowTask] = useState(false);
  const dispatch = useDispatch();

  function onAddTask(sanitizedValue) {
    setShowTask(!showTask);
    dispatch(addTasks(sanitizedValue));
  }

  return (
    <div className="content">
      <h1>Add Tasks</h1>
      <CreateButton showTask={showTask} onShow={setShowTask} />
      {showTask && <CreateTasks onAddTask={onAddTask} />}
      <TaskItems />
    </div>
  );
};

export default Content;
