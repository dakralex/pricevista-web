import "./SearchResultItem.css";

interface IPrice {
  id: string;
  value: number;
  currency: string;
  from?: Date;
}

interface IStorePrice {
  id: string;
  store: string;
  price: IPrice;
}

interface IArticleVariant {
  id: string;
  name?: string;
  unit: string;
  quantity: number;
  storePrices: Array<IStorePrice>;
}

interface IArticle {
  id: string;
  name: string;
  brand: string;
  description?: string;
  imageUrl?: string;
  variants: Array<IArticleVariant>;
}

type ISearchResultItem = IArticle;

const SearchResultItem = () => {
  return (
    <div className="pv-resultItem">
      <div className="imageSection">No image</div>
      <h3>Article Name</h3>
      <p>Article Description</p>
    </div>
  );
};

export default SearchResultItem;
