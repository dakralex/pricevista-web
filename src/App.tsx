import './assets/app.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';

const App = () => {
	return (
		<RouterProvider router={router} />
	);
};

export default App;
