import { Fragment } from "react";
import Delete from "src/components/delete/Delete";

const Buttons = ({ id }) => {
  return (
    <Fragment>
      <Delete taskId={id} />
    </Fragment>
  );
};

export default Buttons;
