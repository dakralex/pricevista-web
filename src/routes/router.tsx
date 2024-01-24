import {createHashRouter, defer, LoaderFunction} from 'react-router-dom';
import Root from './Root.tsx';
import HomePage from './pages/HomePage.tsx';
import SearchPage from './pages/SearchPage.tsx';
import ArticlePage from './pages/ArticlePage.tsx';

const ARTICLE_INFO_API_URL = `${import.meta.env.VITE_API_BASE_URL}/articles/info`;

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