import { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "src/components/button/Button.jsx";
import sanitizeInput from "src/utils/helpers/sanitizeInput";
import {
  ALT_HIDE_BUTTON_TEXT,
  CLASS_TASK_INPUT,
  ICON_BIN,
  TEXT_ADD,
  TEXT_ENTER,
  TYPE_TEXT,
} from "src/utils/constants/constants";
import "src/components/tasks/CreateTask.component.scss";

const CreateTask = ({ onAddTask, onHideButtonClick }) => {
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
    setTask(null);
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
        className={CLASS_TASK_INPUT}
        value={task}
        ref={inputRef}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button buttonText={TEXT_ADD} onButtonClick={handleAddTask} />
      <Button
        iconSrc={ICON_BIN}
        altText={ALT_HIDE_BUTTON_TEXT}
        onButtonClick={onHideButtonClick}
      />
    </Fragment>
  );
};

CreateTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onHideButtonClick: PropTypes.func.isRequired,
};

export default CreateTask;
