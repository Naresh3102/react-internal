import React from "react";
import CompanyName from "./CompanyName";

const Company = ({ name }) => {
  return (
    <div>
      <CompanyName name={name} />
    </div>
  );
};

export default Company;
