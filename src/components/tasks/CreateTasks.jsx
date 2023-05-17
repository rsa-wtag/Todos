import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "src/store/actions/taskActions";
import "src/components/tasks/CreateTasks.component.scss";

const CreateTasks = ({ id, setId, show, onShow }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

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
          content: task,
          createdAt: formattedDate,
          is_done: false,
        })
      );
      setTask("");
      setId(id + 1);
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
      />
      <button className="add-btn" onClick={add}>
        Add
      </button>
    </div>
  );
};

export default CreateTasks;
