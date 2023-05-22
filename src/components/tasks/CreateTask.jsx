import { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import sanitizeInput from "src/utils/helpers/sanitizeInput";
import "src/components/tasks/CreateTask.component.scss";

const CreateTask = ({ onAddTask }) => {
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
    </Fragment>
  );
};

CreateTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default CreateTask;
