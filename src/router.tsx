import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root.tsx';
import HomePage from './routes/pages/homePage.tsx';
import SearchPage from './routes/pages/searchPage.tsx';
import ArticlePage from './routes/pages/articlePage.tsx';

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