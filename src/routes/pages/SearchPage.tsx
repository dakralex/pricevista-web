import './SearchPage.css';
import {useLoaderData} from 'react-router-dom';
import ArticleList from '../../components/search/ArticleList.tsx';

const SearchPage = () => {
  // @ts-ignore
  const {items} = useLoaderData();

  return (
      <div className="pv-search-container">
        <ArticleList items={items} />
      </div>
  );
};

export default SearchPage;
