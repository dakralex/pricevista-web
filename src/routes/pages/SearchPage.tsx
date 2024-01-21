import './SearchPage.css';
import ArticleList from '../../components/search/ArticleList.tsx';
import {Articles} from '../../components/search/ArticleItem.tsx';
import {useEffect, useState} from 'react';

const articlesApiUrl = `${import.meta.env.VITE_API_BASE_URL}/articles`;

const SearchPage = () => {
  const pageSize = 10;

  const [page] = useState<number>(0);
  const [items, setItems] = useState<Articles>([]);

  useEffect(() => {
    fetch(`${articlesApiUrl}/?page=${page}&pageSize=${pageSize}`).
        then(response => response.json()).
        then(json => setItems(json.items)).
        catch(error => console.error(error));
  });

  return (
      <div className="pv-search-container">
        <ArticleList items={items} />
      </div>
  );
};

export default SearchPage;
