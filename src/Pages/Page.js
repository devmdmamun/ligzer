import useFetch from "../Component/useFetch";
import Loading from "../Component/Loading";
import Cards from "../Component/Cards";
const Page = () => {
  const { data, error, isLoading } = useFetch(
    "https://ligzer-anime-beta-default-rtdb.firebaseio.com/animedata.json"
  );
  return (
    <div className="container">
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
      {error && <div>{error}</div>}
      {data && (
        <div className="animeContainer">
          <Cards data={data} />
        </div>
      )}
    </div>
  );
};

export default Page;
