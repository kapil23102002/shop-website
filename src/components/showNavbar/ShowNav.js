import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowNav = ({ children }) => {
  const location = useLocation();
  const [ShowNav, setShowNav] = useState(false);

  useEffect(() => {
    // console.log("this location is:", location)
    if (location.pathname === "/") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);
  return (
    <>
      <div> {ShowNav && children}</div>
    </>
  );
};

export default ShowNav;
