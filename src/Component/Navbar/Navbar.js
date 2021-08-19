import { useEffect, useState } from "react";
import BigNav from "./BigNav";
import SmNav from "./SmNav";
const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const smallScreen = 800;
  useEffect(() => {
    const handledevices = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handledevices);
    return () => {
      window.removeEventListener("resize", handledevices);
    };
  }, []);
  return <>{width < smallScreen ? <SmNav /> : <BigNav />}</>;
};

export default Navbar;
