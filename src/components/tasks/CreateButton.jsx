import addicon from "src/assets/images/add.png";
import "src/components/tasks/CreateButton.scss";

const CreateButton = ({ show, onShow }) => {
  const handleButtonClick = () => {
    onShow(!show);
  };

  return (
    <>
      <button className="create-button" onClick={handleButtonClick}>
        <img src={addicon} alt="Add Task Button" /> Create
      </button>
    </>
  );
};

export default CreateButton;