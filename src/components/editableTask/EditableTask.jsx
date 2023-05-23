import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "src/components/button/Button";
import { editTask } from "src/store/actions/taskActions";

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
    </Fragment>
  );
};

export default EditableTask;
