import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Navbar.module.css";
const SmNav = () => {
  return (
    <>
      <header className={classes.navbarSmHeader}>
        <div className={classes.headerWrapperSm}>
          <div className={classes.smLogo}>
            <Link to="/">Ligzer</Link>
            <small>anime</small>
          </div>
          <div className={classes.searchSm}>
            <Link to="/search">
              <FontAwesomeIcon icon="search" className={classes.icon} />
            </Link>
          </div>
        </div>
      </header>
      <nav className={classes.navbarSmMain}>
        <div className={classes.mainLinkSm}>
          <Link className={classes.linkBox} to="/winter-2021">
            <FontAwesomeIcon icon="snowflake" className={classes.icon} />
            <p className={classes.linkTxt}>Winter</p>
          </Link>
          <Link className={classes.linkBox} to="/spring-2021">
            <FontAwesomeIcon icon="seedling" className={classes.icon} />
            <p className={classes.linkTxt}>Spring</p>
          </Link>
          <Link className={classes.linkBox} to="/summer-2021">
            <FontAwesomeIcon icon="sun" className={classes.icon} />
            <p className={classes.linkTxt}>Summer</p>
          </Link>
          <Link className={classes.linkBox} to="/fall-2021">
            <FontAwesomeIcon icon="leaf" className={classes.icon} />
            <p className={classes.linkTxt}>Fall</p>
          </Link>
        </div>
        <div className={classes.cngMainLink}>
          <FontAwesomeIcon icon="bars" className={classes.icon} />
        </div>
      </nav>
    </>
  );
};

export default SmNav;
