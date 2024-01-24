import {createContext, Dispatch, useContext, useReducer} from 'react';
import {
  SearchAction,
  SearchMarket,
  SearchProviderProps,
  SearchReducer,
  SearchSortOption,
  SearchSortOrder,
  SearchState,
} from '../search';

const initialSearch: SearchState = {
  query: '',
  sort: 'price',
  order: 'asc',
  markets: [],
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
    default:
      throw Error(`Unknown action: ${action}`);
  }
};

const SearchContext =
    createContext<SearchState | null>(null);
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
