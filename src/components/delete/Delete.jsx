import { BIN_ICON } from "src/utils/constants/constants";
import { DELETE_TEXT } from "src/utils/constants/constants";
import { ButtonCreator } from "../buttonCreator/ButtonCreator";
import { REMOVE_TASK } from "src/store";
import PropTypes from "prop-types";

const Delete = ({ taskId }) => {
  const taskType = REMOVE_TASK;

  return (
    <div>
      <ButtonCreator
        taskType={taskType}
        taskId={taskId}
        icon={BIN_ICON}
        altText={DELETE_TEXT}
      />
    </div>
  );
};

Delete.propTypes = {
  taskId: PropTypes.string.isRequired,
};

export default Delete;
