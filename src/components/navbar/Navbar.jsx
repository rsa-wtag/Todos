import { LOGO } from "src/utils/constants/constants";
import Search from "src/components/search/Search";
import "src/components/navbar/Navbar.component.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={LOGO} alt="Logo" />
        <h1>Todos</h1>
      </div>
      <div className="search-bar">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
