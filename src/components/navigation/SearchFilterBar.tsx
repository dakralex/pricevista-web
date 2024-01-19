import Checkbox from '../input/Checkbox.tsx';
import './SearchFilterBar.css';
import Select, { SelectOptions } from '../input/Select.tsx';

const SearchFilterBar = () => {
	const sortOptions: SelectOptions = [
		{ value: 'alpha-asc', displayText: 'Alphabetisch (auf.)' },
		{ value: 'alpha-desc', displayText: 'Alphabetisch (ab.)' },
		{ value: 'price-asc', displayText: 'Preis (auf.)' },
		{ value: 'price-desc', displayText: 'Preis (ab.)' }
	];

	return <div className="pv-search-filter-container">
		<Select id="sort" formName="sort" displayText="Sortierung"
						options={sortOptions} />
		<Checkbox id="bio" displayText="Nur Bio-Produkte" />
		<div className="radio">
			<label>
				<input type="radio" name="filter-options" value="bestprice" />
				Bestpreis
			</label>
		</div>

		<div className="radio">
			<label>
				<input type="radio" name="filter-options" value="allstores" />
				Alle Märkte
			</label>
		</div>

		<div className="radio">
			<label>
				<input type="radio" name="filter-options" value="billa" />
				Billa
			</label>
		</div>

		<div className="radio">
			<label>
				<input type="radio" name="filter-options" value="hofer" />
				Hofer
			</label>
		</div>

		<div className="radio">
			<label>
				<input type="radio" name="filter-options" value="spar" />
				Spar
			</label>
		</div>

		<div className="radio">
			<label>
				<input type="radio" name="filter-options" value="bio" />
				Nur Bio
			</label>
		</div>
	</div>;
};

export default SearchFilterBar;