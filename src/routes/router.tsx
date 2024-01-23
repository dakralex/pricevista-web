import {createHashRouter, defer, LoaderFunction} from 'react-router-dom';
import Root from './Root.tsx';
import HomePage from './pages/HomePage.tsx';
import SearchPage from './pages/SearchPage.tsx';
import ArticlePage from './pages/ArticlePage.tsx';

const ARTICLES_PAGE_SIZE = 10;
const ARTICLES_API_URL = `${import.meta.env.VITE_API_BASE_URL}/articles`;
const ARTICLE_INFO_API_URL = `${import.meta.env.VITE_API_BASE_URL}/articles/info`;

const articlesSearchLoader: LoaderFunction = async ({params}) => {
  const {page, query} = params as SearchPageParams;
  const apiUrl = `${ARTICLES_API_URL}/?q=${query}&page=${page}&pageSize=${ARTICLES_PAGE_SIZE}`;

  return defer({
    data: fetch(apiUrl).
        then(res => res.json()).
        catch(err => console.error(err)),
  });
};

const articleInfoLoader: LoaderFunction = async ({params}) => {
  const {id} = params as ArticlePageParams;
  const apiUrl = `${ARTICLE_INFO_API_URL}/?id=${id}`;

  return defer({
    data: fetch(apiUrl).
        then(res => res.json()).
        catch(err => console.error(err)),
  });
};

// TODO Sadly the test server that I deploy to doesn't allow
//      rewrites so we use a hash router for now
const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/search/:query/:page',
        element: <SearchPage />,
        loader: articlesSearchLoader,
      },
      {
        path: '/article/:id',
        element: <ArticlePage />,
        loader: articleInfoLoader,
      },
    ],
  },
]);

export default router;