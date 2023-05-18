import { SEARCH_ICON } from "src/utils/constants/constants";
import "src/components/search/Search.component.scss";

const Search = () => {
  return (
    <div className="search">
      <img src={SEARCH_ICON} alt="Search" />
    </div>
  );
};

export default Search;
