import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {InfinitySpin} from 'react-loader-spinner';
import Sidebar from '../../components/navigation/Sidebar.tsx';
import ArticleList from '../../components/search/ArticleList.tsx';
import './SearchPage.css';
import {
  fetchSearchResults,
  receiveSearchResults,
  resetSearchResults,
  setSearchQuery,
  useSearch,
  useSearchDispatch,
} from '../../context/SearchProvider.tsx';

const SearchPage = () => {
  const {
    page,
    query,
  } = useParams<SearchPageParams>();
  const {
    sort,
    order,
    markets,
    results,
    status,
  } = useSearch();
  const dispatch = useSearchDispatch();

  useEffect(() => {
    dispatch?.(resetSearchResults());
    dispatch?.(setSearchQuery(query ?? ''));

    const pageNum = page ? parseInt(page, 10) - 1 : 0;

    fetchSearchResults(query ?? '', pageNum, sort, order, markets).
        then(res => dispatch?.(receiveSearchResults(res.items)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  const resultsRenderHandler = (
      results: SearchResults, status: SearchStatus) => {
    if (status === 'loading' || results === null) {
      return <div className="pv-search-empty">
        <InfinitySpin color="#f56476" />
      </div>;
    }

    if (results.length === 0) {
      return <p className="pv-search-empty">
        Es wurde keine Artikel mit dem Namen "{query}" gefunden.
      </p>;
    } else {
      return <ArticleList items={results} />;
    }
  };

  return (
      <div className="pv-search-container">
        <Sidebar />
        {/* TODO Refactor hardcoded color */}
        <div className="pv-search-results">
          {resultsRenderHandler(results, status)}
        </div>
      </div>
  );
};

export default SearchPage;
