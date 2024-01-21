import './ArticleItem.css';

export type Article = {
  id: string;
  brandName: string;
  name: string;
  description?: string;
  imageUrl?: string;
  articleUnit: string;
  articleQuantity: number;
  priceCurrency: string;
  price: number;
  storeName: string;
}
export type Articles = Array<Article>;

const ArticleItem = ({
  id,
  brandName,
  name,
  description,
  imageUrl,
  articleUnit,
  articleQuantity,
  priceCurrency,
  price,
  storeName,
}: Article) => {
  return <div key={id} className="pv-article-item">
    <img
        src={imageUrl ?? 'https://placehold.co/250'}
        alt={imageUrl
            ? `${brandName} ${name} article image`
            : `Missing image for ${brandName} ${name}`
        } />
    <div className="pv-article-item-info">
      <h4><span className="pv-article-item-brand">{brandName}</span> {name}</h4>
      <span
          className="pv-article-item-quantity">{articleQuantity}&nbsp;{articleUnit}</span>
      {description &&
          <p className="pv-article-item-description">{description}</p>}
    </div>
    <div className="pv-article-item-data">
      <div className="pv-article-item-price-best">
        <p>{priceCurrency}&nbsp;{price}</p>
        <span>{storeName}</span>
      </div>
    </div>
  </div>;
};

export default ArticleItem;
