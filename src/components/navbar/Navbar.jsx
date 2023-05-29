import Search from "src/components/search/Search";
import { ALT_NAV_LOGO_TEXT } from "src/utils/constants/constants";
import { NAV_LOGO } from "src/utils/constants/imageSources";
import styles from "src/components/navbar/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__logo"]}>
        <img
          src={NAV_LOGO}
          alt={ALT_NAV_LOGO_TEXT}
          className={styles["navbar__logo--img"]}
        />
        <h1>Todos</h1>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
