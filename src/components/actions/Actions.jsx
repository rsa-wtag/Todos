import { Fragment } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "src/components/button/Button";
import { deleteTask, taskDone } from "src/store/actions/taskActions";
import {
  ALT_MARK_TEXT,
  ALT_EDIT_TEXT,
  ALT_DELETE_TEXT,
} from "src/utils/constants/altTexts";
import {
  ICON_MARK,
  ICON_PEN,
  ICON_BIN,
} from "src/utils/constants/imageSources";

const Actions = ({ task }) => {
  const buttonProps = [
    {
      iconSrc: ICON_MARK,
      altText: ALT_MARK_TEXT,
      clickFunction: onTaskDone,
      showButton: !task.isCompleted,
    },
    {
      iconSrc: ICON_PEN,
      altText: ALT_EDIT_TEXT,
      showButton: !task.isCompleted,
    },
    {
      iconSrc: ICON_BIN,
      altText: ALT_DELETE_TEXT,
      clickFunction: onDeleteTask,
      showButton: true,
    },
  ];
  const dispatch = useDispatch();

  function onDeleteTask() {
    dispatch(deleteTask(task.id));
  }

  function onTaskDone() {
    dispatch(taskDone(task.id));
  }

  return (
    <Fragment>
      {buttonProps.map(
        ({ iconSrc, altText, clickFunction, showButton }, index) =>
          showButton && (
            <Button
              key={index}
              iconSrc={iconSrc}
              altText={altText}
              onButtonClick={clickFunction}
            />
          )
      )}

      {task.isCompleted && (
        <div>
          <span>
            Completed in
            {" " +
              task.daysToComplete +
              (task.daysToComplete > 1 ? " days" : " day")}
          </span>
        </div>
      )}
    </Fragment>
  );
};

Actions.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired,
  }),
};

export default Actions;
