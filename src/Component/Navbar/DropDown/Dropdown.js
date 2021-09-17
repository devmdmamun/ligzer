import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css";
const Dropdown = (props) => {
  return (
    <div className={classes.dropDown}>
      <Link
        to="/bookmarked"
        className={classes.dropItem}
        onClick={props.hideDd}
      >
        <FontAwesomeIcon icon="bookmark" className={classes.dwIcon} />
        <p>Book-marked</p>
      </Link>
      <Link to="/about" className={classes.dropItem} onClick={props.hideDd}>
        <FontAwesomeIcon icon="code" className={classes.dwIcon} />
        <p>About us</p>
      </Link>
    </div>
  );
};

export default Dropdown;
