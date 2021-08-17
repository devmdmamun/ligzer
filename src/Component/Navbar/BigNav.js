import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
const BigNav = () => {
  return (
    <div className={classes.navbar}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link to="/">OtakuList</Link>
        </div>
        <div className={classes.mainLink}>
          <Link to="/winter">Winter</Link>
          <Link to="/spring">Spring</Link>
          <Link to="/summer">Summer</Link>
          <Link to="/fall">Fall</Link>
        </div>
        <div className={classes.sideLink}>
          <Link to="/favorite">Favorite</Link>
          <Link to="/watching">Watching</Link>
        </div>
      </nav>
    </div>
  );
};

export default BigNav;
