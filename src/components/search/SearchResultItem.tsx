interface IPrice {
	id: string,
	value: number,
	currency: string,
	from?: Date
}

interface IStorePrice {
	id: string,
	store: string,
	price: IPrice
}

interface IArticleVariant {
	id: string,
	name?: string,
	unit: string,
	quantity: number,
	storePrices: Array<IStorePrice>
}

interface IArticle {
	id: string,
	name: string,
	brand: string,
	description?: string,
	imageUrl?: string,
	variants: Array<IArticleVariant>
}

type ISearchResultItem = IArticle;

const SearchResultItem = ({
														name,
														brand,
														description,
														imageUrl
													}: ISearchResultItem) => {
	return <div>
		{imageUrl?.length ? <img src={imageUrl} /> : <div>No image</div>}
		<p>{brand}&nbsp;{name}</p>
		<p>{description}</p>
	</div>;
};

export default SearchResultItem;