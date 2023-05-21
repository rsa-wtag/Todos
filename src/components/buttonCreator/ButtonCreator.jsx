import "src/components/buttonCreator/ButtonCreator.component.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "src/store/actions/taskActions";
import { REMOVE_TASK } from "src/store";

export const ButtonCreator = ({ taskType, icon, altText, taskId }) => {
  const dispatch = useDispatch();

  function handleEvent() {
    if (taskType === REMOVE_TASK) {
      dispatch(deleteTask(taskId));
    }
  }

  return (
    <button className="button" onClick={handleEvent}>
      <img src={icon} alt={altText} />
    </button>
  );
};

ButtonCreator.propTypes = {
  taskId: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
