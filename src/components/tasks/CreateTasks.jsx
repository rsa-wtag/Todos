import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "src/store/actions/taskActions";
import "src/components/tasks/CreateTasks.component.scss";
import { v4 as uuidv4 } from "uuid";

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
      const currentDate = new Date();
      const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
      const formattedDate = currentDate
        .toLocaleDateString("en-UK", options)
        .replace(/\//g, ".");
      dispatch(
        addTasks({
          id: uuidv4(),
          content: task,
          createdAt: formattedDate,
          is_done: false,
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

export default CreateTasks;
