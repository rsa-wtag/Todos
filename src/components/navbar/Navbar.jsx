import logo from "src/assets/images/nav-logo.png";
import Search from "src/components/search/Search";
import "src/components/navbar/Navbar.component.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h1>Todos</h1>
      </div>
      <div className="search-bar">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
