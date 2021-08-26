import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Card.module.css";
const Cards = ({ data }) => {
  return (
    <>
      {console.log(typeof data)}
      {data.map((item) => (
        <div key={item.id} className={classes.cardWrapper}>
          <div className={classes.imgWrapper}>
            <img className={classes.img} src={item.image} alt="title" />
            <div className={classes.imgTitleOverlay}>
              <div className={classes.imgTitle}>{item.title}</div>
            </div>
          </div>
          <div className={classes.descWrapper}>
            <div className={classes.toWatch}>
              <h3>Click here for more info</h3>
              <FontAwesomeIcon icon="info-circle" className={classes.icon} />
            </div>
            <div className={classes.description}>{item.description}</div>
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
      ))}
    </>
  );
};

export default Cards;
