import './homePage.css';
import Sidebar from '../../components/navigation/Sidebar';
import SearchPage from './searchPage';


const HomePage = () => {
	return <div className='pv-container'>
		<Sidebar />
	
		<div className="pv-content">
			<SearchPage />
		</div>
	</div>;
};

export default HomePage;