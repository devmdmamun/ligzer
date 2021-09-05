import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css";
const Dropdown = (props) => {
  return (
    <div className={classes.dropDown}>
      <Link to="/favorite" className={classes.dropItem} onClick={props.hideDd}>
        <FontAwesomeIcon icon="heart" className={classes.dwIcon} />
        <p>Favorite</p>
      </Link>
      <Link to="/watching" className={classes.dropItem} onClick={props.hideDd}>
        <FontAwesomeIcon icon="tv" className={classes.dwIcon} />
        <p>Watching</p>
      </Link>
    </div>
  );
};

export default Dropdown;
