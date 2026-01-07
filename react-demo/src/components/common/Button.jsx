import React from "react";
import styles from "./Button.module.css";

function Button({
  fullname,
  age = "NA",
  skills = [],
  children,
  abcd = () => {},
}) {
  abcd();

  return (
    <div>
      <p className={styles.title}>{fullname}</p>
      <p>{data.age}</p>
      <p>{data.skills}</p>
      {data.children}
    </div>
  );
}

export default Button;
