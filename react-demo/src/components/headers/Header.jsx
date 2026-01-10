import React, { useContext } from "react";
import Company from "./Company";
import NameContext from "../../context/NameContext";

const Header = () => {
  const values = useContext(NameContext);
  return (
    <div>
      <Company />
      <p>Location: {values.location}</p>
    </div>
  );
};

export default Header;
