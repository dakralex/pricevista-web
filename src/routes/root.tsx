import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header.tsx';
import Sidebar from '../components/navigation/Sidebar.tsx';

const Root = () => {
	return <div className={'pv-wrapper'}>
		<Header></Header>
		<Sidebar></Sidebar>
		<div>
			<Outlet />
		</div>
	</div>;
};

export default Root;