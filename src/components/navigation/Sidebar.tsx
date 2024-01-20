import './Sidebar.css';
import SearchFilterBar from './SearchFilterBar.tsx';

interface SideBarProps {
  isHidden?: boolean;
}

const Sidebar = ({isHidden}: SideBarProps) => {
  return <div className={`pv-sidebar ${isHidden && 'hidden'}`}>
    <SearchFilterBar />
  </div>;
};

export default Sidebar;
