import { useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { NAV_LOGO, ALT_NAV_LOGO_TEXT } from "src/utils/constants/constants";
import Search from "src/components/search/Search";
import { setSearchedTasks } from "src/store/actions/searchedTaskActions";
import "src/components/navbar/Navbar.component.scss";

const Navbar = () => {
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
    <div className="navbar">
      <div className="navbar__logo">
        <div>
          <img
            src={NAV_LOGO}
            alt={ALT_NAV_LOGO_TEXT}
            className="navbar__logo-img"
          />
        </div>
        <h1>Todos</h1>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search tasks"
      />
      <Search />
    </div>
  );
};

export default Navbar;
