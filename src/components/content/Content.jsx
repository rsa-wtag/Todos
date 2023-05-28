import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateTask from "src/components/tasks/CreateTask";
import TaskItems from "src/components/tasks/TaskList";
import Button from "src/components/button/Button";
import { addTask } from "src/store/actions/taskActions";
import {
  ALT_ADD_TEXT,
  CLASS_BUTTON_CREATE,
  TEXT_CREATE,
} from "src/utils/constants/constants";
import { ICON_ADD } from "src/utils/constants/imageSources";
import "src/components/content/Content.component.scss";

const Content = () => {
  const [showTask, setShowTask] = useState(false);
  const dispatch = useDispatch();

  function onAddTask(sanitizedValue) {
    setShowTask(!showTask);
    dispatch(addTask(sanitizedValue));
  }

  function showInputField() {
    showTask || setShowTask(!showTask);
  }

  function hideInputField() {
    showTask && setShowTask(!showTask);
  }

  return (
    <div className="content">
      <h1>Add Tasks</h1>
      <Button
        buttonText={TEXT_CREATE}
        iconSrc={ICON_ADD}
        altText={ALT_ADD_TEXT}
        buttonClass={CLASS_BUTTON_CREATE}
        onButtonClick={showInputField}
      />
      {showTask && (
        <CreateTask onAddTask={onAddTask} onHideButtonClick={hideInputField} />
      )}
      <TaskItems />
    </div>
  );
};

export default Content;
