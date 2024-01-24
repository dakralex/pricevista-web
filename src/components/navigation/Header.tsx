import {Link} from 'react-router-dom';
import Searchbar from '../search/Searchbar.tsx';
import './Header.css';

const Header = () => {
  return <div className="pv-header">
    <div className="pv-header-logo">
      <Link to="/"><h1>PriceVista</h1></Link>
    </div>
    <Searchbar />
  </div>;
};

export default Header;
