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
import styles from "src/components/content/Content.module.scss";

const Content = () => {
  const [showTask, setShowTask] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();

  function onAddTask(sanitizedValue) {
    setShowTask(!showTask);
    dispatch(addTask(sanitizedValue));
    setButtonDisabled(false);
  }

  function showInputField() {
    setShowTask(!showTask);
    setButtonDisabled(true);
  }

  return (
    <div className={styles["content"]}>
      <h1>Add Tasks</h1>
      <Button
        buttonText={TEXT_CREATE}
        iconSrc={ICON_ADD}
        altText={ALT_ADD_TEXT}
        buttonClass={styles[CLASS_BUTTON_CREATE]}
        isButtonDisabled={isButtonDisabled}
        onButtonClick={showInputField}
      />
      {showTask && (
        <CreateTask onAddTask={onAddTask} onHideButtonClick={showInputField} />
      )}
      <TaskItems />
    </div>
  );
};

export default Content;
