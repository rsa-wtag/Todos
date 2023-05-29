import Search from "src/components/search/Search";
import { ALT_NAV_LOGO_TEXT } from "src/utils/constants/altTexts";
import { NAV_LOGO } from "src/utils/constants/imageSources";
import {
  CLASS_NAVBAR,
  CLASS_NAVBAR_LOGO,
  CLASS_NAVBAR_LOGO_IMG,
} from "src/utils/constants/classNames";
import styles from "src/components/navbar/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles[CLASS_NAVBAR]}>
      <div className={styles[CLASS_NAVBAR_LOGO]}>
        <img
          src={NAV_LOGO}
          alt={ALT_NAV_LOGO_TEXT}
          className={styles[CLASS_NAVBAR_LOGO_IMG]}
        />
        <h1>Todos</h1>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
