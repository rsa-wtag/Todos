import { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "src/components/button/Button.jsx";
import sanitizeInput from "src/utils/helpers/sanitizeInput";
import "src/components/tasks/CreateTask.component.scss";
import { ALT_HIDE_BUTTON_TEXT, ICON_BIN } from "src/utils/constants/constants";

const CreateTask = ({ onAddTask, onHideButtonClick }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  function focusInputRef() {
    inputRef.current.focus();
  }

  useEffect(focusInputRef, []);

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
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTask();
    }
  };

  return (
    <Fragment>
      <input
        type="text"
        className="task-input"
        value={task}
        ref={inputRef}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>Add</button>
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
