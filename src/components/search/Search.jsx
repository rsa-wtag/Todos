import Button from "src/components/button/Button";
import { ALT_SEARCH_TEXT } from "src/utils/constants/constants";
import { ICON_SEARCH } from "src/utils/constants/imageSources";
import "src/components/search/Search.component.scss";

const Search = () => {
  return (
    <div className="search">
      <Button iconSrc={ICON_SEARCH} altText={ALT_SEARCH_TEXT} />
    </div>
  );
};

export default Search;
