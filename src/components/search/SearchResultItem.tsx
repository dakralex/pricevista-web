import './SearchResultItem.css';

export type Article = {
	id: string;
	brand: string;
	name: string;
	description?: string;
	imageUrl?: string;
	quantityUnit: string;
	quantity: number;
	priceCurrency: string;
	price: number;
}
export type Articles = Array<Article>;

const SearchResultItem = ({
														id,
														brand,
														name,
														description,
														imageUrl,
														quantityUnit,
														quantity,
														priceCurrency,
														price
													}: Article) => {
	return <div key={id} className="pv-search-result-item">
		<img src={imageUrl ?? 'https://placehold.co/250'} alt="" />
		<div className="pv-search-result-item-info">
			<h3>{brand} {name}</h3>
			<p>{quantity}&nbsp;{quantityUnit}</p>
			{description && <p>{description}</p>}
		</div>
		<div className="pv-search-result-item-price">
			<p>{priceCurrency}&nbsp;{price}</p>
		</div>
	</div>;
};

export default SearchResultItem;
