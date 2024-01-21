import {createHashRouter} from 'react-router-dom';
import Root from './routes/Root.tsx';
import HomePage from './routes/pages/HomePage.tsx';
import SearchPage from './routes/pages/SearchPage.tsx';
import ArticlePage from './routes/pages/ArticlePage.tsx';

// TODO Sadly the test server that I deploy to doesn't allow rewrites so we use
//      a hash router for now
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
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/articles/:articleId',
        element: <ArticlePage />,
      },
    ],
  },
]);

export default router;