import { NAV_LOGO, ALT_NAV_LOGO_TEXT } from "src/utils/constants/constants";
import Search from "src/components/search/Search";
import "src/components/navbar/Navbar.component.scss";

const Navbar = () => {
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

      <Search />
    </div>
  );
};

export default Navbar;
