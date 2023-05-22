import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTasks } from "src/store/actions/taskActions";
import sanitizeInput from "src/utils/helpers/sanitizeInput";
import "src/components/tasks/CreateTasks.component.scss";

const CreateTasks = ({ showTask, onAddTask }) => {
  const dispatch = useDispatch();
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
      dispatch(addTasks(sanitizedValue));
      onAddTask(!showTask);
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

CreateTasks.propTypes = {
  showTask: PropTypes.bool.isRequired,
  onAddTask: PropTypes.func.isRequired,
};

export default CreateTasks;
