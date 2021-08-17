import { useEffect, useState } from "react";
import BigNav from "./BigNav";
import SmNav from "./SmNav";
const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const smallScreen = 768;
  useEffect(() => {
    const handledevices = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handledevices);
    return () => {
      window.removeEventListener("resize", handledevices);
    };
  }, []);
  return <div>{width < smallScreen ? <SmNav /> : <BigNav />}</div>;
};

export default Navbar;
