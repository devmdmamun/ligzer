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
        studio: props.studio,
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
            <div>
              <small> Studio </small>
              <h3>{props.studio}</h3>
            </div>
            <div className={classes.externaliconDiv}>
              <FontAwesomeIcon
                icon="external-link-alt"
                className={classes.icon}
              />
            </div>
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
                  itemIsFavorite ? classes.activeIconBookmark : classes.icon
                }
                icon="bookmark"
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
