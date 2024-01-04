import Searchbar from "../../components/search/Searchbar";
import SearchResultList from "../../components/search/SearchResultList";

const SearchPage = () => {
  return (
    <div className="pv-search-container">
      <h1>Search</h1>
      <Searchbar />
      <SearchResultList />
    </div>
  );
};

export default SearchPage;
