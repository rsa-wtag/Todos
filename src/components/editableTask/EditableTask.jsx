import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "src/components/button/Button";
import {
  editTask,
  revertTask,
  saveAndDoneTask,
} from "src/store/actions/taskActions";
import {
  ALT_REVERT_TEXT,
  ALT_SAVE_AND_DONE_TEXT,
  ICON_BIN,
  ICON_MARK,
} from "src/utils/constants/constants";

const EditableTask = ({ task, changeEditableState }) => {
  const [editedTask, setEditedTask] = useState(task.title);
  const dispatch = useDispatch();

  function handleChange(event) {
    setEditedTask(event.target.value);
  }

  function onSave() {
    dispatch(editTask(task.id, editedTask));
    changeEditableState();
  }

  function onSaveAndDone() {
    dispatch(saveAndDoneTask(task.id, editedTask));
    changeEditableState();
  }

  function onRevertTask() {
    dispatch(revertTask());
    changeEditableState();
  }

  return (
    <Fragment>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={editedTask}
        onChange={handleChange}
      ></textarea>
      <Button buttonText="save" onButtonClick={onSave} />
      <Button
        iconSrc={ICON_MARK}
        altText={ALT_SAVE_AND_DONE_TEXT}
        onButtonClick={onSaveAndDone}
      />
      <Button
        iconSrc={ICON_BIN}
        altText={ALT_REVERT_TEXT}
        onButtonClick={onRevertTask}
      />
    </Fragment>
  );
};

export default EditableTask;
