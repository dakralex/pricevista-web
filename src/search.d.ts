type SearchState = {
  query: string;
  sort: SearchSortOption;
  order: SearchSortOrder;
  markets: SearchMarkets,
  results: SearchResults,
  status: SearchStatus
};

type SearchAction =
    | { type: 'setQuery', query: string }
    | { type: 'setSort', sort: SearchSortOption, order: SearchSortOrder }
    | { type: 'addMarket', market: SearchMarket }
    | { type: 'removeMarket', market: SearchMarket }
    | { type: 'resetResults' }
    | { type: 'receiveResults', articles: Array<Article> };

type SearchReducer = React.Reducer<SearchState, SearchAction>;

type SearchSortOption = 'price' | 'name' | 'brandName';
type SearchSortOrder = 'asc' | 'desc';
type SearchMarket = 'billa' | 'hofer' | 'spar';
type SearchMarkets = Array<SearchMarket>;
type SearchResults = Array<Article> | null;
type SearchStatus = 'loading' | 'done';