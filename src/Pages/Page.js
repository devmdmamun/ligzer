import useFetch from "../Component/useFetch";
import Loading from "../Component/Loading";
import Cards from "../Component/Cards";
import Error from "../Component/Error";
import NotFound from "../Component/NotFound";
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
  let content;
  if (pageData.length !== 0) {
    content = (
      <div className="animeContainer">
        <Cards data={pageData} />
      </div>
    );
  } else {
    content = <NotFound />;
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
      {data && content}
    </div>
  );
};

export default Page;
