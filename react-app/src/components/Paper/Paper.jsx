import React, { useContext } from "react";
import styles from "./Paper.module.css";
import clsx from "clsx";
import ThemeContext from "../ThemeContext/ThemeContext";

const Paper = ({ children, className }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={clsx(styles.paperWrapper, className)}
      style={{ backgroundColor: theme.paperBackground, color: theme.paperColor }}
    >
      {children}
    </div>
  );
};

export default Paper;
