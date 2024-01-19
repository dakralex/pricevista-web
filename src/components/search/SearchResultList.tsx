import './SearchResultList.css';
import SearchResultItem, {
	Articles
} from '../../components/search/SearchResultItem';

interface SearchResultListProps {
	items: Articles;
}

const SearchResultList = ({ items }: SearchResultListProps) => {
	return <div className="pv-search-result-list">
		{items.map(item => <SearchResultItem {...item} />)}
	</div>;
};

export default SearchResultList;
