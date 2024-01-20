import './ArticleList.css';
import ArticleItem, {Articles} from './ArticleItem.tsx';

interface ArticleListProps {
  items: Articles;
}

const ArticleList = ({items}: ArticleListProps) => {
  return <div className="pv-article-list">
    {items.map(item => <ArticleItem {...item} />)}
  </div>;
};

export default ArticleList;
