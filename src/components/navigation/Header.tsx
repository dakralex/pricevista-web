import {Link, useNavigate} from 'react-router-dom';
import Searchbar, {SearchHandler} from '../search/Searchbar.tsx';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const searchbarHandler: SearchHandler = (query) => {
    if (query === null || query === '') {
      navigate(`/`);
    } else {
      navigate(`/search/${query}/1`);
    }
  };

  return <div className="pv-header">
    <div className="pv-header-logo">
      <Link to="/"><h1>PriceVista</h1></Link>
    </div>
    <Searchbar onEnter={searchbarHandler} />
  </div>;
};

export default Header;
