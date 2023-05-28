import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTask from "src/components/tasks/CreateTask";
import TaskList from "src/components/tasks/TaskList";
import { addTasks } from "src/store/actions/taskActions";
import { Button } from "src/components/button/Button";
import { setNumOfVisibleTasks } from "src/store/actions/numOfVisibleTaskAction";
import {
  ALT_ADD_TEXT,
  CLASS_BUTTON_CREATE,
  ICON_ADD,
  TEXT_CREATE,
} from "src/utils/constants/constants";
import { showSearchedTasks } from "src/store/actions/showSearchedTaskActions";
import "src/components/content/Content.component.scss";

const Content = () => {
  const [showTask, setShowTask] = useState(false);
  const [label, setLabel] = useState("All");
  const tasks = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const numOfVisibleTasks = useSelector(
    (state) => state.numOfVisibleTasks.numOfVisibleTasks
  );
  const searchedTasks = useSelector((state) => state.searchedTasks);
  const showSearch = useSelector((state) => state.showSearchedTasks);

  const [filteredTasks, setFilteredTasks] = useState([]);
  const initialNumOfTasks = 3;

  useEffect(() => {
    setFilteredTasks(showSearch ? [...searchedTasks] : [...tasks]);
    if (showSearch && label === "Incomplete") {
      showIncompleteTasks();
    } else if (showSearch && label === "Complete") {
      showCompleteTasks();
    } else {
      setLabel("All");
    }
  }, [tasks, searchedTasks]);
  function onAddTask(sanitizedValue) {
    setLabel("All");
    dispatch(showSearchedTasks());
    setShowTask(!showTask);
    dispatch(addTasks(sanitizedValue));
    dispatch(setNumOfVisibleTasks(numOfVisibleTasks + 1));
  }

  function showInputField() {
    showTask || setShowTask(!showTask);
    if (
      numOfVisibleTasks !== 0 &&
      numOfVisibleTasks % initialNumOfTasks === 0
    ) {
      dispatch(setNumOfVisibleTasks(numOfVisibleTasks - 1));
    }
  }

  function hideInputField() {
    showTask && setShowTask(!showTask);
    if (
      numOfVisibleTasks !== tasks.length &&
      tasks.length >= initialNumOfTasks &&
      numOfVisibleTasks % initialNumOfTasks === initialNumOfTasks - 1
    ) {
      dispatch(setNumOfVisibleTasks(numOfVisibleTasks + 1));
    }
  }

  function showAllTasks() {
    setLabel("All");
    setFilteredTasks(showSearch ? [...searchedTasks] : [...tasks]);
    dispatch(setNumOfVisibleTasks(initialNumOfTasks));
  }

  function showIncompleteTasks() {
    setLabel("Incomplete");
    const filteredTasks = showSearch
      ? searchedTasks.filter((task) => !task.isCompleted)
      : tasks.filter((task) => !task.isCompleted);
    setFilteredTasks(filteredTasks);
    dispatch(setNumOfVisibleTasks(initialNumOfTasks));
  }

  function showCompleteTasks() {
    setLabel("Complete");
    const filteredTasks = showSearch
      ? searchedTasks.filter((task) => task.isCompleted)
      : tasks.filter((task) => task.isCompleted);
    setFilteredTasks(filteredTasks);
    dispatch(setNumOfVisibleTasks(initialNumOfTasks));
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
      <Button buttonText="All" onButtonClick={showAllTasks} />
      <Button buttonText="Incomplete" onButtonClick={showIncompleteTasks} />
      <Button buttonText="Complete" onButtonClick={showCompleteTasks} />
      {showTask && (
        <CreateTask onAddTask={onAddTask} onHideButtonClick={hideInputField} />
      )}
      <TaskList
        initialNumOfTasks={initialNumOfTasks}
        tasks={filteredTasks}
        showTask={showTask}
      />
    </div>
  );
};

export default Content;
