import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="pv-searchField">
      <input
        className={"pv-searchbar"}
        type="text"
        placeholder="Ich suche..."
      />
    </div>
  );
};

export default Searchbar;
