import PropTypes from "prop-types";
import { ALT_ADD_TEXT, ICON_ADD } from "src/utils/constants/constants";
import "src/components/tasks/CreateButton.scss";

const CreateButton = ({ showTask, onShow }) => {
  function toggleShow() {
    onShow((showTask) => !showTask);
  }

  return (
    <button className="create-button" onClick={toggleShow}>
      <img src={ICON_ADD} alt={ALT_ADD_TEXT} /> Create
    </button>
  );
};

CreateButton.propTypes = {
  showTask: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default CreateButton;
