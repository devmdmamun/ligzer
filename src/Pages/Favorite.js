import { useContext } from "react";
import Cards from "../Component/Cards";
import FavoriteContext from "../Component/store/favorite-context";

const Favorite = () => {
  const favoritesCtx = useContext(FavoriteContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p className="basicMassage">
        You have no favorites yet. Start adding some?
      </p>
    );
  } else {
    content = (
      <div className="animeContainer">
        <Cards data={favoritesCtx.favorites} />
      </div>
    );
  }
  return <div className="container">{content}</div>;
};

export default Favorite;
