import { useState } from "react";
import { connect } from "react-redux";
import { addTasks } from "src/app/tasks/taskActions";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTasks(obj)),
  };
};

const Tasks = (props) => {
  const [task, setTask] = useState("");
  const [id, setId] = useState(0);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const add = () => {
    if (task === "") {
      alert("Input is Empty");
    } else {
      props.addTask({
        id: id,
        item: task,
        completed: false,
      });
      setTask("");
      setId(id + 1);
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
      <button className="add-btn" onClick={() => add()}>
        Add
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
