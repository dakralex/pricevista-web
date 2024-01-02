import { createBrowserRouter } from 'react-router-dom';
import RootPage from './routes/homePage.tsx';
import ArticlePage from './routes/articlePage.tsx';
import SearchPage from './routes/searchPage.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		// TODO Add custom errorElement later on
		children: [
			{
				path: 'search',
				element: <SearchPage />
			},
			{
				path: 'articles/:articleId',
				element: <ArticlePage />
			}
		]
	}
]);

export default router;