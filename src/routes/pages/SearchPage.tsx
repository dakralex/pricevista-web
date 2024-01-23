import {Suspense} from 'react';
import {InfinitySpin} from 'react-loader-spinner';
import {Await, useLoaderData, useParams} from 'react-router-dom';
import Sidebar from '../../components/navigation/Sidebar.tsx';
import ArticleList from '../../components/search/ArticleList.tsx';
import './SearchPage.css';

const SearchPage = () => {
  // @ts-expect-error TODO Find out how to type React-Router loader data
  const {data} = useLoaderData();
  const {query} = useParams<SearchPageParams>();

  const articlesResolveHandler = (data: ArticlesResponse) => {
    if (data.resultSize === 0) {
      return <p className="pv-search-empty">
        Es wurde keine Artikel mit dem Namen "{query}" gefunden.
      </p>;
    } else {
      return <ArticleList items={data.items} />;
    }
  };

  return (
      <div className="pv-search-container">
        <Sidebar />
        {/* TODO Refactor hardcoded color */}
        <div className="pv-search-results">
          <Suspense fallback={<div className="pv-search-empty">
            <InfinitySpin color="#f56476" />
          </div>}>
            <Await resolve={data}>
              {articlesResolveHandler}
            </Await>
          </Suspense>
        </div>
      </div>
  );
};

export default SearchPage;
