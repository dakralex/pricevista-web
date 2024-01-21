import './ArticleList.css';
import ArticleItem, {Articles} from './ArticleItem.tsx';
import {InfinitySpin} from 'react-loader-spinner';

interface ArticleListProps {
  items: Articles;
}

const ArticleList = ({items}: ArticleListProps) => {
  return <div className="pv-article-list">
    {items.length > 0
        ? items.map(item => <ArticleItem key={item.id} {...item} />)
        : <InfinitySpin color="#f56476" /> /* TODO Refactor hardcoded color */
    }
  </div>;
};

export default ArticleList;
