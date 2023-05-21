import { useState } from "react";
import "src/components/content/Content.component.scss";
import CreateTasks from "src/components/tasks/CreateTasks";
import TaskItems from "src/components/tasks/TaskItems";
import CreateButton from "src/components/tasks/CreateButton";

const Content = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="content">
      <h1>Add Tasks</h1>
      <CreateButton showTask={show} onShow={setShow} />
      {show && <CreateTasks showTask={show} onShow={setShow} />}
      <TaskItems />
    </div>
  );
};

export default Content;
