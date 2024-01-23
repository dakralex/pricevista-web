import './Root.css';
import {Outlet} from 'react-router-dom';
import Header from '../components/navigation/Header.tsx';

const Root = () => {
  return <div className="pv-container">
    <Header />
    <div className="pv-page-container">
      <Outlet />
    </div>
  </div>;
};

export default Root;