import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Card.module.css";
const Card = () => {
  return (
    <div className="container">
      <div className={classes.cardWrapper}>
        <div className={classes.imgWrapper}>
          <img
            className={classes.img}
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116742-jn0dW23ftehq.jpg"
            alt="title"
          />
          <div className={classes.imgTitleOverlay}>
            <div className={classes.imgTitle}>
              Info about the anime and the title is here
            </div>
          </div>
        </div>
        <div className={classes.descWrapper}>
          <div className={classes.toWatch}>
            <h3>Click to see more info about this anime</h3>
            <FontAwesomeIcon icon="info-circle" className={classes.icon} />
          </div>
          <div className={classes.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </div>
          <div className={classes.social}>
            <div>
              <FontAwesomeIcon icon="thumbs-up" />
              <p></p>
            </div>
            <div>
              <FontAwesomeIcon icon="thumbs-down" />
            </div>
            <div>
              <FontAwesomeIcon icon="heart" />
            </div>
            <div>
              <FontAwesomeIcon icon="share" />
            </div>
          </div>
        </div>
        <div className={classes.scroll}></div>
      </div>
    </div>
  );
};

export default Card;
