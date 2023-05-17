import CreateTasks from "src/components/tasks/CreateTasks";
import TaskItems from "src/components/tasks/TaskItems";
import "src/components/content/Content.component.scss";
import { useEffect, useState } from "react";
import CreateButton from "src/components/tasks/CreateButton";

const Content = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div className="content">
      <h1>Add Tasks</h1>
      <CreateButton show={show} onShow={setShow} />
      {show && (
        <CreateTasks id={id} setId={setId} show={show} onShow={setShow} />
      )}
      <TaskItems />
    </div>
  );
};

export default Content;
