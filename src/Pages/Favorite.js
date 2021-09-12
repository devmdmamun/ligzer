import { useContext } from "react";
import Cards from "../Component/Cards";
import FavoriteContext from "../Component/store/favorite-context";

const Favorite = () => {
  const favoriteCtx = useContext(FavoriteContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p className="basicMassage">You got no bookmark yet</p>;
  } else {
    content = (
      <div className="animeContainer">
        <Cards data={favoriteCtx.favorites} />
      </div>
    );
  }
  return <div className="container">{content}</div>;
};

export default Favorite;
