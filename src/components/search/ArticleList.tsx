import './ArticleList.css';
import ArticleItem from './ArticleItem.tsx';

interface ArticleListProps {
  items: Articles;
}

const ArticleList = ({items}: ArticleListProps) => {
  return <div className="pv-article-list">
    {items.map(item => <ArticleItem key={item.id} {...item} />)}
  </div>;
};

export default ArticleList;
