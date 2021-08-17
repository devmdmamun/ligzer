import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Navbar.module.css";
const SmNav = () => {
  return (
    <nav className={classes.navbarSmMain}>
      <div className={classes.mainLinkSm}>
        <Link className={classes.linkBox} to="/winter">
          <FontAwesomeIcon icon="snowflake" className={classes.icon} />
          <p className={classes.linkTxt}>Winter</p>
        </Link>
        <Link className={classes.linkBox} to="/spring">
          <FontAwesomeIcon icon="seedling" className={classes.icon} />
          <p className={classes.linkTxt}>Spring</p>
        </Link>
        <Link className={classes.linkBox} to="/summer">
          <FontAwesomeIcon icon="sun" className={classes.icon} />
          <p className={classes.linkTxt}>Summer</p>
        </Link>
        <Link className={classes.linkBox} to="/fall">
          <FontAwesomeIcon icon="leaf" className={classes.icon} />
          <p className={classes.linkTxt}>Fall</p>
        </Link>
      </div>
      <div className={classes.cngMainLink}>
        <FontAwesomeIcon icon="bars" className={classes.icon} />
      </div>
    </nav>
  );
};

export default SmNav;
