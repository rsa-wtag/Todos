import { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "src/components/button/Button";
import { sanitizeInput } from "src/utils/helpers/utilities";
import { TEXT_ADD, TEXT_ENTER } from "src/utils/constants/constants";
import { ALT_HIDE_BUTTON_TEXT } from "src/utils/constants/altTexts";
import { TYPE_TEXT } from "src/utils/constants/typeTexts";
import { ICON_BIN } from "src/utils/constants/imageSources";
import styles from "src/components/tasks/CreateTask.module.scss";

const CreateTask = ({ onAddTask, onHideTask }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  useEffect(focusInputRef, []);

  function focusInputRef() {
    inputRef.current.focus();
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleAddTask() {
    const sanitizedValue = sanitizeInput(task);

    if (sanitizedValue) {
      onAddTask(sanitizedValue);
    }
    setTask("");
  }

  const handleKeyPress = (event) => {
    if (event.key === TEXT_ENTER) {
      event.preventDefault();
      handleAddTask();
    }
  };

  return (
    <Fragment>
      <input
        type={TYPE_TEXT}
        className={styles["task-input"]}
        value={task}
        ref={inputRef}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button buttonText={TEXT_ADD} onButtonClick={handleAddTask} />
      <Button
        iconSrc={ICON_BIN}
        altText={ALT_HIDE_BUTTON_TEXT}
        onButtonClick={onHideTask}
      />
    </Fragment>
  );
};

CreateTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onHideTask: PropTypes.func.isRequired,
};

export default CreateTask;
