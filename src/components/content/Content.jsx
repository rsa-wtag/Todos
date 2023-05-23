import { useState } from "react";
import { useDispatch } from "react-redux";
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

const Content = () => {
  const [showTask, setShowTask] = useState(false);
  const dispatch = useDispatch();

  function onAddTask(sanitizedValue) {
    setShowTask(!showTask);
    dispatch(addTasks(sanitizedValue));
  }
  function showInputField() {
    {
      showTask || setShowTask(!showTask);
    }
  }
  function hideInputField() {
    {
      showTask && setShowTask(!showTask);
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
      <TaskList />
    </div>
  );
};

export default Content;
