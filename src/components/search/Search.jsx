import Button from "src/components/button/Button";
import { ALT_SEARCH_TEXT } from "src/utils/constants/constants";
import { ICON_SEARCH } from "src/utils/constants/imageSources";
import styles from "src/components/search/Search.module.scss";

const Search = () => {
  return (
    <div className={styles["search"]}>
      <Button iconSrc={ICON_SEARCH} altText={ALT_SEARCH_TEXT} />
    </div>
  );
};

export default Search;
