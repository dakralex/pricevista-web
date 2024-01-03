import { Link } from 'react-router-dom';

const ArticlePage = () => {
	return <div>
		<h1>Articles</h1>
		<Link to={'..'}>Go back</Link>
	</div>;
};

export default ArticlePage;