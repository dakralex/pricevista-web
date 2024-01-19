import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root.tsx';
import HomePage from './routes/pages/HomePage.tsx';
import SearchPage from './routes/pages/SearchPage.tsx';
import ArticlePage from './routes/pages/ArticlePage.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		// TODO Add custom errorElement later on
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/search',
				element: <SearchPage />
			},
			{
				path: '/articles/:articleId',
				element: <ArticlePage />
			}
		]
	}
]);

export default router;