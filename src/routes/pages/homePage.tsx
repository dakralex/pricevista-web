import { Link } from 'react-router-dom';

const HomePage = () => {
	return <div>
		<ul>
			<li><Link to={'/search'}>Go to search page</Link></li>
			<li><Link to={'/articles'}>Go to articles</Link></li>
		</ul>
	</div>;
};

export default HomePage;