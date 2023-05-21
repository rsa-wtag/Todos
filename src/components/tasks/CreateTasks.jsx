import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "src/components/tasks/CreateTasks.component.scss";
import { addTasks } from "src/store/actions/taskActions";
import sanitizeInput from "src/utils/helpers/sanitizeInput";

const CreateTasks = ({ showTask, onShow }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  function focusInputRef() {
    inputRef.current.focus();
  }

  useEffect(focusInputRef, []);

  function handleChange(event) {
    const sanitizedValue = sanitizeInput(event.target.value);
    setTask(sanitizedValue);
  }

  function handleAddTask() {
    if (task.trim()) {
      dispatch(addTasks(task));
      onShow(!showTask);
    }
    setTask("");
  }

  return (
    <Fragment>
      <input
        type="text"
        onChange={handleChange}
        className="task-input"
        value={task}
        ref={inputRef}
      />
      <button onClick={handleAddTask}>Add</button>
    </Fragment>
  );
};

CreateTasks.propTypes = {
  showTask: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default CreateTasks;
