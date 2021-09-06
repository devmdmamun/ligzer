import useFetch from "../Component/useFetch";
import Loading from "../Component/Loading";
import Cards from "../Component/Cards";
import Error from "../Component/Error";
import { useParams } from "react-router-dom";
const Page = () => {
  const { pageId } = useParams();
  const { data, error, isLoading } = useFetch(
    "https://ligzer-anime-beta-default-rtdb.firebaseio.com/animedata.json"
  );
  let pageData = [];
  for (let id in data) {
    if (data[id].pageId === pageId) {
      pageData.push(data[id]);
    }
  }
  return (
    <div className="container">
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
      {data && (
        <div className="animeContainer">
          <Cards data={pageData} />
        </div>
      )}
    </div>
  );
};

export default Page;
