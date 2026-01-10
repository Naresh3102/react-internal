import React, { useContext } from "react";
import NameContext from "../../context/NameContext";

const CompanyName = () => {
  const values = useContext(NameContext);
  console.log(values);

  return <div>{values.name}</div>;
};

export default CompanyName;
