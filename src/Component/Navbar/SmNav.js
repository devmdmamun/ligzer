import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Navbar.module.css";
const SmNav = () => {
  return (
    <>
      <header className={classes.navbarSmHeader}>
        <div className={classes.headerWrapperSm}>
          <div className={classes.smLogo}>
            <Link to="/anime/summer-2021">Ligzer</Link>
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
          <Link className={classes.linkBox} to="/anime/winter-2021">
            <FontAwesomeIcon icon="snowflake" className={classes.icon} />
            <p className={classes.linkTxt}>Winter</p>
          </Link>
          <Link className={classes.linkBox} to="/anime/spring-2021">
            <FontAwesomeIcon icon="seedling" className={classes.icon} />
            <p className={classes.linkTxt}>Spring</p>
          </Link>
          <Link className={classes.linkBox} to="/anime/summer-2021">
            <FontAwesomeIcon icon="sun" className={classes.icon} />
            <p className={classes.linkTxt}>Summer</p>
          </Link>
          <Link className={classes.linkBox} to="/anime/fall-2021">
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
