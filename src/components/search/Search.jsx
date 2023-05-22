import { ICON_SEARCH, ALT_SEARCH_TEXT } from "src/utils/constants/constants";
import "src/components/search/Search.component.scss";

const Search = () => {
  return (
    <div className="search">
      <img src={ICON_SEARCH} alt={ALT_SEARCH_TEXT} />
    </div>
  );
};

export default Search;
