import './Filter.css';

const Filter = () => {
	return <div className="pv-filter">
		<div className="radio">
          <label>
            <input type="radio" name="filter-options" value="bestprice"  />
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
		</div>
};

export default Filter;