import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateTasks from "src/components/tasks/CreateTasks";
import TaskItems from "src/components/tasks/TaskList";
import { addTasks } from "src/store/actions/taskActions";
import { ALT_ADD_TEXT, ICON_ADD } from "src/utils/constants/constants";
import { ButtonCreator } from "src/components/buttonCreator/ButtonCreator";
import "src/components/content/Content.component.scss";

const Content = () => {
  const [showTask, setShowTask] = useState(false);
  const dispatch = useDispatch();

  function onAddTask(sanitizedValue) {
    setShowTask(!showTask);
    dispatch(addTasks(sanitizedValue));
  }

  function toggleShow() {
    setShowTask(!showTask);
  }

  return (
    <div className="content">
      <h1>Add Tasks</h1>
      <ButtonCreator
        onButtonClick={toggleShow}
        buttonText={"create"}
        icon={ICON_ADD}
        altText={ALT_ADD_TEXT}
        buttonClass={"content__button__create"}
      />
      {showTask && <CreateTasks onAddTask={onAddTask} />}
      <TaskItems />
    </div>
  );
};

export default Content;
