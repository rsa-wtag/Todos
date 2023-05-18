import { ADD_ICON } from "src/utils/constants/constants";
import "src/components/tasks/CreateButton.scss";

const CreateButton = ({ show, onShow }) => {
  const handleButtonClick = () => {
    onShow(!show);
  };

  return (
    <button className="create-button" onClick={handleButtonClick}>
      <img src={ADD_ICON} alt="Add Task Button" /> Create
    </button>
  );
};

export default CreateButton;
