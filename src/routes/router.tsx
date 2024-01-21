import {createHashRouter, defer, LoaderFunction} from 'react-router-dom';
import Root from './Root.tsx';
import HomePage from './pages/HomePage.tsx';
import SearchPage from './pages/SearchPage.tsx';
import ArticlePage from './pages/ArticlePage.tsx';

const ARTICLES_PAGE_SIZE = 10;
const ARTICLES_API_URL = `${import.meta.env.VITE_API_BASE_URL}/articles`;

const articlesSearchLoader: LoaderFunction = async ({params}) => {
  const {page, query} = params as SearchPageParams;

  try {
    const response = await fetch(
        `${ARTICLES_API_URL}/?q=${query}&page=${page}&pageSize=${ARTICLES_PAGE_SIZE}`,
    );
    const json = await response.json();
    return defer({items: json.items});
  } catch (error) {
    return console.error(error);
  }
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
        path: '/articles/:id',
        element: <ArticlePage />,
      },
    ],
  },
]);

export default router;