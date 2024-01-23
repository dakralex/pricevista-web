import './ArticleItem.css';
import {Link} from 'react-router-dom';

type ArticleItemProps = Article;

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
}: ArticleItemProps) => {
  const priceDisplay = price / 100;

  return <div className="pv-article-item">
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
        <p>{priceCurrency}&nbsp;{priceDisplay}</p>
        <span>{storeName}</span>
      </div>
    </div>
    <Link to={`/article/${id}`} tabIndex={0} />
  </div>;
};

export default ArticleItem;
