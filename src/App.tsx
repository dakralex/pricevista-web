import './assets/base.css';
import './assets/app.css';
import './assets/assets.css';

import {RouterProvider} from 'react-router-dom';
import router from './router.tsx';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
