import React from "react";
import Company from "./Company";

const Header = ({ name }) => {
  return (
    <div>
      <Company name={name} />
    </div>
  );
};

export default Header;
