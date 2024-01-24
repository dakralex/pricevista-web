import './SearchFilterSection.css';
import {Button} from '../input/Button.tsx';
import Checkbox from '../input/Checkbox.tsx';
import Select, {SelectOptions} from '../input/Select.tsx';
import {RadioSelect, RadioSelectOptions} from '../input/RadioSelect.tsx';
import {FormEventHandler, ReactEventHandler, useRef} from 'react';
import {
  addSearchMarket,
  removeSearchMarket,
  setSearchSort,
  useSearchDispatch,
} from '../../context/SearchProvider.tsx';
import {SearchMarket, SearchSortOption, SearchSortOrder} from '../../search';

const ARROW_UP = '\u279A';
const ARROW_DOWN = `\u2798`;
const EN_SPACE = `\u2000`;

const SearchFilterSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sortOptions: SelectOptions = [
    {value: 'price-asc', displayText: `Preis${EN_SPACE}${ARROW_UP}`},
    {value: 'price-desc', displayText: `Preis${EN_SPACE}${ARROW_DOWN}`},
    {value: 'name-asc', displayText: `Name${EN_SPACE}${ARROW_UP}`},
    {value: 'name-desc', displayText: `Name${EN_SPACE}${ARROW_DOWN}`},
    {value: 'brandName-asc', displayText: `Brand${EN_SPACE}${ARROW_UP}`},
    {value: 'brandName-desc', displayText: `Brand${EN_SPACE}${ARROW_DOWN}`},
  ];

  const displayOptions: RadioSelectOptions = [
    {value: 'bestprice', displayText: 'Bestpreis'},
    {value: 'all', displayText: 'Alle Märkte'},
  ];

  const filterSubmitHandler: FormEventHandler = () => {
    // TODO Implement update on articles search api here
  };

  const dispatch = useSearchDispatch();

  const selectSortHandler: ReactEventHandler<HTMLSelectElement> = (e) => {
    const [sort, order] = e.currentTarget.value.split('-');

    dispatch?.(
        setSearchSort(sort as SearchSortOption, order as SearchSortOrder));
  };

  const checkMarketHandler = (market: SearchMarket): ReactEventHandler<HTMLInputElement> =>
      (e) => {
        dispatch?.(e.currentTarget.checked
            ? addSearchMarket(market)
            : removeSearchMarket(market),
        );
      };

  return <form ref={formRef}
               onSubmit={filterSubmitHandler}
               className="pv-search-filter-container">
    <Select id="sort"
            name="sort"
            displayText="Sortierung"
            onChange={selectSortHandler}
            options={sortOptions} />

    <RadioSelect id="markets"
                 name="markets"
                 displayText="Anzeige"
                 options={displayOptions} />

    <div className="pv-search-filter-options">
      <strong>Filter-Optionen</strong>
      <Checkbox id="billa"
                name="billa"
                displayText="BILLA"
                onChange={checkMarketHandler('billa')} />
      <Checkbox id="hofer"
                name="hofer"
                displayText="HOFER"
                onChange={checkMarketHandler('hofer')} />
      <Checkbox id="spar"
                name="spar"
                displayText="SPAR"
                onChange={checkMarketHandler('spar')} />
    </div>

    <div className="pv-search-filter-buttons">
      <Button onClick={() => formRef.current?.submit()}>Filter anpassen</Button>
    </div>
  </form>;
};

export default SearchFilterSection;