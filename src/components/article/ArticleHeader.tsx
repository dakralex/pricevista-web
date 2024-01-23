type ArticleHeaderProps = {
  article: Article
};

export const ArticleHeader = ({
  article,
}: ArticleHeaderProps) => {
  return (
      <div className="pv-article-header">
        <div className="pv-article-info-box">
          <h2 className="pv-article-info-name">{article.brandName} {article.name}</h2>
          <p className="pv-article-info-quantity">{article.articleQuantity}&nbsp;{article.articleUnit}</p>
          <p className="pv-article-info-description">{article.description}</p>
        </div>
        <div className="pv-article-info-image">
          <img
              src={article.imageUrl ?? 'https://placehold.co/500'}
              alt={article.imageUrl
                  ? `${article.brandName} ${article.name} article image`
                  : `Missing image for ${article.brandName} ${article.name}`
              } />
        </div>
      </div>
  );
};