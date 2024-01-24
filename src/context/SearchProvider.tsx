import {
  createContext,
  Dispatch,
  ReactElement,
  useContext,
  useReducer,
} from 'react';

const initialSearch: SearchState = {
  query: '',
  sort: 'price',
  order: 'asc',
  markets: [],
  results: null,
  status: 'loading',
};

const searchReducer: SearchReducer = (search, action) => {
  switch (action.type) {
    case 'setQuery':
      return {
        ...search,
        query: action.query,
      };
    case 'setSort':
      return {
        ...search,
        sort: action.sort,
        order: action.order,
      };
    case 'addMarket': {
      const markets = search.markets;

      if (markets.indexOf(action.market) === -1) {
        markets.push(action.market);
      }

      return {
        ...search,
        markets: markets,
      };
    }
    case 'removeMarket': {
      const markets = search.markets.filter(market => market !== action.market);

      return {
        ...search,
        markets: markets,
      };
    }
    case 'resetResults':
      return {
        ...search,
        results: null,
        status: 'loading',
      };
    case 'receiveResults':
      return {
        ...search,
        results: action.articles,
        status: 'done',
      };
    default:
      throw Error(`Unknown action`);
  }
};

const SearchContext =
    createContext<SearchState>(initialSearch);
const SearchDispatchContext =
    createContext<Dispatch<SearchAction> | null>(null);

export const useSearch = () => useContext(SearchContext);
export const useSearchDispatch = () => useContext(SearchDispatchContext);

export const setSearchQuery = (query: string): SearchAction => ({
  type: 'setQuery',
  query: query,
});

export const setSearchSort = (
    sort: SearchSortOption,
    order: SearchSortOrder,
): SearchAction => ({
  type: 'setSort',
  sort: sort,
  order: order,
});

export const addSearchMarket = (market: SearchMarket): SearchAction => ({
  type: 'addMarket',
  market: market,
});

export const removeSearchMarket = (market: SearchMarket): SearchAction => ({
  type: 'removeMarket',
  market: market,
});

export const resetSearchResults = (): SearchAction => ({
  type: 'resetResults',
});

export const receiveSearchResults = (articles: Array<Article>): SearchAction => ({
  type: 'receiveResults',
  articles: articles,
});

type SearchProviderProps = {
  children: ReactElement | ReactElement[] | string,
}

const ARTICLES_PAGE_SIZE = 10;
const ARTICLES_API_URL = `${import.meta.env.VITE_API_BASE_URL}/articles`;

export const fetchSearchResults = async (
    query: string, page: number, sort: SearchSortOption,
    order: SearchSortOrder): Promise<ArticlesResponse> => {
  const apiUrl = `${ARTICLES_API_URL}/?q=${query}&page=${page}&pageSize=${ARTICLES_PAGE_SIZE}&sort=${sort}&order=${order}`;

  return fetch(apiUrl).then(res => res.json()).catch(err => console.error(err));
};

const SearchProvider = ({
  children,
}: SearchProviderProps) => {
  const [search, dispatch] =
      useReducer(searchReducer, initialSearch);

  return (
      <SearchContext.Provider value={search}>
        <SearchDispatchContext.Provider value={dispatch}>
          {children}
        </SearchDispatchContext.Provider>
      </SearchContext.Provider>
  );
};

export default SearchProvider;
