import Buttons from "src/components/buttons/Buttons";
import PropTypes from "prop-types";

const TaskBoard = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <li key={task.id} className="task-list__item">
            <h3>{task.title}</h3>
            <p>Created At: {task.createdAt}</p>
            <Buttons id={task.id} />
          </li>
        );
      })}
    </>
  );
};

TaskBoard.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskBoard;
