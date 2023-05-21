import "src/components/navbar/Navbar.component.scss";
import { NAV_LOGO, NAV_LOGO_TEXT } from "src/utils/constants/constants";
import Search from "src/components/search/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={NAV_LOGO} alt={NAV_LOGO_TEXT} className="navbar-img" />
        <h1>Todos</h1>
      </div>

      <Search />
    </div>
  );
};

export default Navbar;
