import PropTypes from "prop-types";
import "src/components/tasks/CreateButton.scss";
import { ADD_ICON } from "src/utils/constants/constants";

const CreateButton = ({ showTask, onShow }) => {
  function toggleShow() {
    onShow((showTask) => !showTask);
  }

  return (
    <button className="create-button" onClick={toggleShow}>
      <img src={ADD_ICON} alt="Add Task Button" /> Create
    </button>
  );
};

CreateButton.propTypes = {
  showTask: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default CreateButton;
