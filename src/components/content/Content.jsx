import { useState } from "react";
import "src/components/content/Content.component.scss";
import CreateTasks from "src/components/tasks/CreateTasks";
import TaskItems from "src/components/tasks/TaskList";
import CreateButton from "src/components/tasks/CreateButton";

const Content = () => {
  const [showTask, setShowTask] = useState(false);

  return (
    <div className="content">
      <h1>Add Tasks</h1>
      <CreateButton showTask={showTask} onShow={setShowTask} />
      {showTask && <CreateTasks showTask={showTask} onShow={setShowTask} />}
      <TaskItems />
    </div>
  );
};

export default Content;
