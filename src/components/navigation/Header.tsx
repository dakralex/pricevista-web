import './Header.css';
import Searchbar from '../search/Searchbar.tsx';

const Header = () => {
	return <div className={'pv-header'}>
		<h1>PriceVista</h1>
		<Searchbar />
	</div>;
};

export default Header;
