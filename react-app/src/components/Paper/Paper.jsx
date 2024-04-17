import React from "react";
import styles from "./Paper.module.css";
import clsx from "clsx";

const Paper = ({ children, className }) => {
  return <div className={clsx(styles.paperWrapper, className)}>{children}</div>;
};

export default Paper;
