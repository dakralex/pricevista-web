import './Sort2.css';

const Sort2 = () => {
	return (
		<div className="pv-sort2">
			<div className="radio">
				<label>
					<input type="radio" name="filter-options" value="unitprice" />
					Mengenpreis
				</label>
			</div>

			<div className="radio">
				<label>
					<input type="radio" name="filter-options" value="saleprice" />
					Verkaufspreis
				</label>
			</div>
		</div>
	);
};

export default Sort2;
