import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "src/components/tasks/CreateTasks.component.scss";
import { addTasks } from "src/store/actions/taskActions";
import { createDate } from "src/utils/helpers/createDate";

const CreateTasks = ({ show, onShow }) => {
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

  function add() {
    if (task) {
      dispatch(
        addTasks({
          content: task,
          createdAt: createDate(),
        })
      );
      setTask("");
      onShow(!show);
    }
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
      <button className="add-btn" onClick={add}>
        Add
      </button>
    </Fragment>
  );
};

CreateTasks.propTypes = {
  show: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default CreateTasks;
