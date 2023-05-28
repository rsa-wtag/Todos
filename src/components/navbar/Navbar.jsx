import { useState } from "react";
import { useDispatch } from "react-redux";
import { NAV_LOGO, ALT_NAV_LOGO_TEXT } from "src/utils/constants/constants";
import { clearSearchedTasks } from "src/store/actions/searchedTaskActions";
import { ICON_SEARCH, ALT_SEARCH_TEXT } from "src/utils/constants/constants";
import Search from "src/components/search/Search";
import { Button } from "src/components/button/Button.jsx";
import "src/components/navbar/Navbar.component.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  function showSearchHandler() {
    if (showSearch) {
      dispatch(clearSearchedTasks());
    }
    setShowSearch(!showSearch);
  }
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
      {showSearch && <Search />}
      <Button
        iconSrc={ICON_SEARCH}
        altText={ALT_SEARCH_TEXT}
        onButtonClick={showSearchHandler}
      />
    </div>
  );
};

export default Navbar;
