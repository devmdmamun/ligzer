import classes from "./Search.module.css";
const Search = () => {
  return (
    <div className={classes.search}>
      <input
        className={classes.searchInp}
        type="text"
        placeholder="Search your favorite anime..."
      />
    </div>
  );
};

export default Search;
