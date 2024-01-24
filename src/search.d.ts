import {Dispatch, ReactElement, Reducer} from 'react';

type SearchState = {
  query: string;
  sort: SearchSortOption;
  order: SearchSortOrder;
  markets: Array<SearchMarket>,
};

type SearchAction =
    | { type: 'setQuery', query: string }
    | { type: 'setSort', sort: SearchSortOption, order: SearchSortOrder }
    | { type: 'addMarket', market: SearchMarket }
    | { type: 'removeMarket', market: SearchMarket };

type SearchReducer = Reducer<SearchState, SearchAction>;
type SearchDispatch = Dispatch<SearchState>;

type SearchProviderProps = {
  children: ReactElement[] | string,
}

type SearchSortOption = 'price' | 'name' | 'brandName';
type SearchSortOrder = 'asc' | 'desc';
type SearchMarket = 'billa' | 'hofer' | 'spar';
