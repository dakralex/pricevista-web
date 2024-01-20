import './SearchFilterSection.css';
import Checkbox from '../input/Checkbox.tsx';
import Select, {SelectOptions} from '../input/Select.tsx';
import {RadioSelect, RadioSelectOptions} from '../input/RadioSelect.tsx';

const ARROW_UP = '\u279A';
const ARROW_DOWN = `\u2798`;
const EN_SPACE = `\u2000`;

const SearchFilterSection = () => {
  const sortOptions: SelectOptions = [
    {value: 'price-asc', displayText: `Preis${EN_SPACE}${ARROW_UP}`},
    {value: 'price-desc', displayText: `Preis${EN_SPACE}${ARROW_DOWN}`},
    {value: 'alpha-asc', displayText: `Name${EN_SPACE}${ARROW_UP}`},
    {value: 'alpha-desc', displayText: `Name${EN_SPACE}${ARROW_DOWN}`},
  ];

  const displayOptions: RadioSelectOptions = [
    {value: 'bestprice', displayText: 'Bestpreis'},
    {value: 'all', displayText: 'Alle Märkte'},
  ];

  return <div className="pv-search-filter-container">
    <Select id="sort"
            name="sort"
            displayText="Sortierung"
            options={sortOptions} />

    <RadioSelect id="markets"
                 name="markets"
                 displayText="Anzeige"
                 options={displayOptions} />

    <div className="pv-search-filter-options">
      <strong>Filter-Optionen</strong>
      <Checkbox id="bio" name="bio" displayText="Nur Bio-Produkte" />
    </div>
  </div>;
};

export default SearchFilterSection;