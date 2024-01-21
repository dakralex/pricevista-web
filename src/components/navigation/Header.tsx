import './Header.css';
import Searchbar, {SearchHandler} from '../search/Searchbar.tsx';
import {useNavigate} from 'react-router-dom';

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
    <h1>PriceVista</h1>
    <Searchbar onEnter={searchbarHandler} />
  </div>;
};

export default Header;
