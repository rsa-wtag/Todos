import { useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedTasks } from "src/store/actions/searchedTaskActions";
import "src/components/search/Search.component.scss";

const Search = () => {
  const tasks = useSelector((state) => state.todos);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const filterTasks = (query) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setSearchedTasks(filteredTasks));
  };

  const debouncedFilterTasks = debounce(filterTasks, 1000);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedFilterTasks(query);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search tasks"
      />
    </div>
  );
};

export default Search;
