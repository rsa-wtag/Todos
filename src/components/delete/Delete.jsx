import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "src/store/actions/taskActions";
import { BIN_ICON } from "src/utils/constants/constants";
import { createButton } from "src/utils/helpers/createButton";

const Delete = (taskId) => {
  const tasks = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  function handleDeleteTask(taskId) {
    dispatch(deleteTask(taskId.taskId));
  }

  return (
    <div>
      {createButton(() => handleDeleteTask(taskId), BIN_ICON, "Delete task")}
    </div>
  );
};

export default Delete;
