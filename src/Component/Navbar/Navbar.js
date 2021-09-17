import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Navbar.module.css";
import { useState, useRef, useEffect } from "react";
import Dropdown from "./DropDown/Dropdown";
const Navbar = () => {
  let dropRef = useRef();

  const [dropDown, setDropDown] = useState(false);
  let insideHandler = () => {
    setDropDown(false);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!dropRef.current.contains(e.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <header className={classes.navbar}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <Link to="/anime/summer-2021">Ligzer</Link>
            <small>anime</small>
          </div>
          <div className={classes.mainLink}>
            <Link to="/anime/winter-2021">
              <FontAwesomeIcon icon="snowflake" className={classes.icon} />
              <p className={classes.linkTxtBg}>Winter</p>
            </Link>
            <Link to="/anime/spring-2021">
              <FontAwesomeIcon icon="seedling" className={classes.icon} />
              <p className={classes.linkTxtBg}>Spring</p>
            </Link>
            <Link to="/anime/summer-2021">
              <FontAwesomeIcon icon="sun" className={classes.icon} />
              <p className={classes.linkTxtBg}>Summer</p>
            </Link>
            <Link to="/anime/fall-2021">
              <FontAwesomeIcon icon="leaf" className={classes.icon} />
              <p className={classes.linkTxtBg}>Fall</p>
            </Link>
          </div>
          <div className={classes.sideLink}>
            <Link to="/search">
              <FontAwesomeIcon icon="search" className={classes.icon} />
            </Link>

            <div ref={dropRef}>
              <FontAwesomeIcon
                icon="bars"
                className={classes.icon}
                onClick={() => {
                  setDropDown(!dropDown);
                }}
              />
              {dropDown && <Dropdown hideDd={insideHandler} />}
            </div>
          </div>
        </nav>
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
      </nav>
    </>
  );
};

export default Navbar;
