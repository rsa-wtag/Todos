import "src/components/search/Search.component.scss";
import { SEARCH_ICON, SEARCH_TEXT } from "src/utils/constants/constants";

const Search = () => {
  return (
    <div className="search">
      <img src={SEARCH_ICON} alt={SEARCH_TEXT} />
    </div>
  );
};

export default Search;
