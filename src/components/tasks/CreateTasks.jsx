import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "src/components/tasks/CreateTasks.component.scss";
import { addTasks } from "src/store/actions/taskActions";
import { createDate } from "src/utils/helpers/createDate";

const CreateTasks = ({ show, onShow }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const add = () => {
    if (task === "") {
      return;
    } else {
      dispatch(
        addTasks({
          content: task,
          createdAt: createDate(),
        })
      );
      setTask("");
      onShow(!show);
    }
  };

  return (
    <div className="addTasks">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="task-input"
        value={task}
        ref={inputRef}
      />
      <button className="add-btn" onClick={add}>
        Add
      </button>
    </div>
  );
};

CreateTasks.propTypes = {
  show: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default CreateTasks;
