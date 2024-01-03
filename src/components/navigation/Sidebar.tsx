import './Filter.css';
import Filter from './Filter';
import './Sort.css';
import Sort from './Sort';


const Sidebar = () => {
	return <div className={'pv-sidebar'}>
			<Filter />
			<Sort />
		</div>
};

export default Sidebar;