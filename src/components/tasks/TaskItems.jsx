import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const TaskItems = (props) => {
  const sortedTasks = [...props.tasks].sort((a, b) => b.id - a.id);
  return (
    <div>
      <ul>
        {sortedTasks.length > 0 &&
          sortedTasks.map((task) => {
            return <li key={task.id}>{task.item}</li>;
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(TaskItems);
