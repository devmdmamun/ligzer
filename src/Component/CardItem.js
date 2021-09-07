import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import classes from "./Card.module.css";
import FavoritesContext from "./store/favorite-context";
const CardItem = (props) => {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        image: props.image,
        description: props.description,
        title: props.title,
      });
    }
  }
  return (
    <>
      <div key={props.id} className={classes.cardWrapper}>
        <div className={classes.imgWrapper}>
          <img className={classes.img} src={props.image} alt="title" />
          <div className={classes.imgTitleOverlay}>
            <div className={classes.imgTitle}>{props.title}</div>
          </div>
        </div>
        <div className={classes.descWrapper}>
          <div className={classes.toWatch}>
            <h3>Click here for more info</h3>
            <FontAwesomeIcon icon="info-circle" className={classes.icon} />
          </div>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.social}>
            <div>
              <FontAwesomeIcon className={classes.icon} icon="thumbs-up" />
            </div>
            <div>
              <FontAwesomeIcon
                onClick={toggleFavoriteStatusHandler}
                className={
                  itemIsFavorite ? classes.activeIconHeart : classes.icon
                }
                icon={itemIsFavorite ? "heart" : "heartbeat"}
              />
            </div>
            <div>
              <FontAwesomeIcon className={classes.icon} icon="share" />
            </div>
          </div>
        </div>
        <div className={classes.scroll}></div>
      </div>
    </>
  );
};

export default CardItem;
