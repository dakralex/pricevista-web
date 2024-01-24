import './Root.css';
import {Outlet} from 'react-router-dom';
import Header from '../components/navigation/Header.tsx';
import SearchProvider from '../context/SearchProvider.tsx';

const Root = () => {
  return <div className="pv-container">
    <SearchProvider>
      <Header />
      <div className="pv-page-container">
        <Outlet />
      </div>
    </SearchProvider>
  </div>;
};

export default Root;