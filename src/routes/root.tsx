import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header.tsx';

const Root = () => {
	return <div className={'pv-wrapper'}>
		<Header />
		<Outlet />
	</div>;
};

export default Root;