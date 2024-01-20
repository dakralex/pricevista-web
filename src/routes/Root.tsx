import './Root.css';
import {Outlet} from 'react-router-dom';
import Header from '../components/navigation/Header.tsx';
import Sidebar from '../components/navigation/Sidebar.tsx';

const Root = () => {
  return <div className="pv-container">
    <Header />
    <div className="pv-page-container">
      <Sidebar />
      <Outlet />
    </div>
  </div>;
};

export default Root;