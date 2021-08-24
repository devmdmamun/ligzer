import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Navbar.module.css";
import { useState } from "react";
import Search from "./Search";
const BigNav = () => {
  const [show, setShow] = useState(false);

  const handleSearchClick = () => {
    setShow(!show);
  };

  return (
    <>
      <header className={classes.navbar}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <Link to="/">Ligzer</Link>
            <small>anime</small>
            {/* <div className={classes.logoSmallTxt}>
            <small>anime</small>
            <small>beta</small>
          </div> */}
          </div>
          <div className={classes.mainLink}>
            <Link to="/winter">
              <FontAwesomeIcon icon="snowflake" className={classes.icon} />
              <p className={classes.linkTxtBg}>Winter</p>
            </Link>
            <Link to="/spring">
              <FontAwesomeIcon icon="seedling" className={classes.icon} />
              <p className={classes.linkTxtBg}>Spring</p>
            </Link>
            <Link to="/summer">
              <FontAwesomeIcon icon="sun" className={classes.icon} />
              <p className={classes.linkTxtBg}>Summer</p>
            </Link>
            <Link to="/fall">
              <FontAwesomeIcon icon="leaf" className={classes.icon} />
              <p className={classes.linkTxtBg}>Fall</p>
            </Link>
          </div>
          <div className={classes.sideLink}>
            <Link to="/favorite">
              <FontAwesomeIcon icon="heart" className={classes.icon} />
            </Link>
            <FontAwesomeIcon
              icon="search"
              className={classes.icon}
              onClick={handleSearchClick}
            />
            <FontAwesomeIcon icon="bars" className={classes.icon} />
            {/* 
          <Link to="/favorite">
            <FontAwesomeIcon icon="heart" className={classes.bgIcon} />
          </Link>
          <Link to="/watching">
            <FontAwesomeIcon icon="tv" className={classes.bgIcon} />
          </Link>
          <Link to="/settings">
            <FontAwesomeIcon icon="cog" className={classes.bgIcon} />
          </Link> */}
          </div>
        </nav>
      </header>
      {show ? <Search /> : null}
    </>
  );
};

export default BigNav;
