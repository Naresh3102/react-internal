import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  console.log(location);

  return <div>{location.pathname} is not found</div>;
};

export default NotFound;
