import { useEffect, useState } from "react";
import Cards from "../Cards";
import Error from "../Error";
import Loading from "../Loading";
import useFetch from "../useFetch";
import classes from "./Search.module.css";
const Search = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const { data, isLoading, error } = useFetch(
    "https://ligzer-anime-beta-default-rtdb.firebaseio.com/animedata.json"
  );
  useEffect(() => {
    if (value.length > 0) {
      setResult([]);
      let searchQuary = value.toLowerCase();
      for (let id in data) {
        let find = data[id].title.toLowerCase();
        if (find.slice(0, searchQuary.length).indexOf(searchQuary) !== -1) {
          setResult((previousResult) => {
            return [...previousResult, data[id]];
          });
        }
      }
    } else {
      setResult([]);
    }
  }, [value, data]);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.search}>
          <input
            className={classes.searchInp}
            type="text"
            placeholder="Search your favorite anime..."
            autoFocus
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
        </div>
        {isLoading && (
          <div>
            <Loading />
          </div>
        )}
        {error && (
          <div>
            <Error />
          </div>
        )}
        <div className={classes.result}>
          <div className="animeContainer">
            {result && <Cards data={result} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
