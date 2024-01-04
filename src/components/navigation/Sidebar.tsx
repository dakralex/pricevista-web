import "./Sidebar.css";
import Filter from "./Filter";
import Sort from "./Sort";
import Sort2 from "./Sort2";

const Sidebar = () => {
  return (
    <div className={"pv-sidebar"}>
      <div>
        <Filter />
      </div>

      <div>
        <Sort />
      </div>

      <div>
        <Sort2 />
      </div>
    </div>
  );
};

export default Sidebar;
