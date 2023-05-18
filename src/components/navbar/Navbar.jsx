import { NAV_LOGO, NAV_LOGO_TEXT } from "src/utils/constants/constants";
import Search from "src/components/search/Search";
import "src/components/navbar/Navbar.component.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={NAV_LOGO} alt={NAV_LOGO_TEXT} />
        <h1>Todos</h1>
      </div>
      <div className="search-bar">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
