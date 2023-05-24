import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTask from "src/components/tasks/CreateTask";
import TaskList from "src/components/tasks/TaskList";
import { addTasks } from "src/store/actions/taskActions";
import { Button } from "src/components/button/Button";
import {
  ALT_ADD_TEXT,
  CLASS_BUTTON_CREATE,
  ICON_ADD,
  TEXT_CREATE,
} from "src/utils/constants/constants";
import "src/components/content/Content.component.scss";
import { setNumOfVisibleTasks } from "src/store/actions/numOfVisibleTaskAction";

const Content = () => {
  const [showTask, setShowTask] = useState(false);
  const dispatch = useDispatch();
  const numOfVisibleTasks = useSelector(
    (state) => state.numOfVisibleTasks.numOfVisibleTasks
  );
  const tasks = useSelector((state) => state.todos);

  const initialNumOfTasks = 3;

  function onAddTask(sanitizedValue) {
    setShowTask(!showTask);
    dispatch(addTasks(sanitizedValue));
    if (tasks.length > numOfVisibleTasks) {
      dispatch(setNumOfVisibleTasks(numOfVisibleTasks + 1));
    }
  }
  function showInputField() {
    showTask || setShowTask(!showTask);
    if (numOfVisibleTasks >= initialNumOfTasks) {
      dispatch(setNumOfVisibleTasks(numOfVisibleTasks - 1));
    }
  }
  function hideInputField() {
    showTask && setShowTask(!showTask);
    if (tasks.length > numOfVisibleTasks) {
      dispatch(setNumOfVisibleTasks(numOfVisibleTasks + 1));
    }
  }

  return (
    <div className="content">
      <h1>Add Tasks</h1>
      <Button
        buttonText={TEXT_CREATE}
        iconSrc={ICON_ADD}
        altText={ALT_ADD_TEXT}
        buttonClass={CLASS_BUTTON_CREATE}
        onButtonClick={showInputField}
      />
      {showTask && (
        <CreateTask onAddTask={onAddTask} onHideButtonClick={hideInputField} />
      )}
      <TaskList initialNumOfTasks={initialNumOfTasks} />
    </div>
  );
};

export default Content;
