import './ArticleList.css';
import ArticleItem, {Articles} from './ArticleItem.tsx';
import {InfinitySpin} from 'react-loader-spinner';
import {Await, useParams} from 'react-router-dom';
import {Fragment, Suspense} from 'react';

interface ArticleListProps {
  items: Articles | null;
}

const ArticleList = ({items}: ArticleListProps) => {
  const {query} = useParams<SearchPageParams>();

  const articlesResolveHandler = (resolvedItems: Articles) => {
    if (resolvedItems.length === 0) {
      return <p>
        Es wurden keine Artikel mit dem Namen "{query}" gefunden.
      </p>;
    } else {
      return <Fragment>
        {resolvedItems.map(item => <ArticleItem key={item.id} {...item} />)}
      </Fragment>;
    }
  };

  // TODO Implement working loading image
  return <div className="pv-article-list">
    {/* TODO Refactor hardcoded color */}
    <Suspense fallback={<InfinitySpin color="#f56476" />}>
      <Await resolve={items}>
        {articlesResolveHandler}
      </Await>
    </Suspense>
  </div>;
};

export default ArticleList;
