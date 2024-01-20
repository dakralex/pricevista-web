import './ArticleItem.css';

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

const ArticleItem = ({
  id,
  brand,
  name,
  description,
  imageUrl,
  quantityUnit,
  quantity,
  priceCurrency,
  price,
}: Article) => {
  return <div key={id} className="pv-article-item">
    <img src={imageUrl ?? 'https://placehold.co/250'} alt="" />
    <div className="pv-article-item-info">
      <h4><span className="pv-article-item-brand">{brand}</span> {name}</h4>
      <span
          className="pv-article-item-quantity">{quantity}&nbsp;{quantityUnit}</span>
      {description &&
          <p className="pv-article-item-description">{description}</p>}
    </div>
    <div className="pv-article-item-data">
      <p className="pv-article-item-price-best">{priceCurrency}&nbsp;{price}</p>
    </div>
  </div>;
};

export default ArticleItem;
