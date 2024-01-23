import './Sidebar.css';
import SearchFilterSection from './SearchFilterSection.tsx';

interface SideBarProps {
  isHidden?: boolean;
}

const Sidebar = ({isHidden}: SideBarProps) => {
  return <div className={`pv-sidebar ${isHidden ? 'hidden' : ''}`}>
    <SearchFilterSection />
  </div>;
};

export default Sidebar;
