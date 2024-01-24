import '../assets/base.css';
import '../assets/app.css';
import '../assets/assets.css';

import router from '../routes/router.tsx';
import {RouterProvider} from 'react-router-dom';
import SearchProvider from '../context/SearchProvider.tsx';

const App = () => {
  return <SearchProvider>
    <RouterProvider router={router} />
  </SearchProvider>;
};

export default App;
