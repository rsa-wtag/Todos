import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateTask from "src/components/tasks/CreateTask";
import TaskItems from "src/components/tasks/TaskList";
import Button from "src/components/button/Button";
import { addTask } from "src/store/actions/taskActions";
import { TEXT_CREATE } from "src/utils/constants/constants";
import {
  CLASS_BUTTON_CREATE,
  CLASS_CONTENT,
} from "src/utils/constants/classNames";
import { ALT_ADD_TEXT } from "src/utils/constants/altTexts";
import { ICON_ADD } from "src/utils/constants/imageSources";
import styles from "src/components/content/Content.module.scss";

const Content = () => {
  const [showTask, setShowTask] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();

  function handleAddTask(sanitizedValue) {
    setShowTask(!showTask);
    dispatch(addTask(sanitizedValue));
    setButtonDisabled(false);
  }

  function toggleInputField() {
    setButtonDisabled(!showTask);
    setShowTask(!showTask);
  }

  return (
    <div className={styles[CLASS_CONTENT]}>
      <h1>Add Tasks</h1>
      <Button
        buttonText={TEXT_CREATE}
        iconSrc={ICON_ADD}
        altText={ALT_ADD_TEXT}
        buttonClass={styles[CLASS_BUTTON_CREATE]}
        isButtonDisabled={isButtonDisabled}
        onButtonClick={toggleInputField}
      />
      {showTask && (
        <CreateTask onAddTask={handleAddTask} onHideTask={toggleInputField} />
      )}
      <TaskItems />
    </div>
  );
};

export default Content;
