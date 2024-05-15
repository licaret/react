import React from "react";
import Paper from "../Paper/Paper";
import styles from "./University.module.css";
import universityEmoji from "../../../public/University.png";
import PropTypes from "prop-types";

const University = ({ name, description }) => {
  return (
    <div className={styles.universityWrapper}>
      <Paper className={styles.universityDataContainer}>
        <img
          src={universityEmoji}
          alt="University Emoji Image"
          className={styles.universityImage}
        />
        <p className={styles.universityType}>University</p>
        <p className={styles.univeristyName}>{name}</p>
      </Paper>

      <Paper>
        <p className={styles.universityDescription}>{description}</p>
      </Paper>
    </div>
  );
};

University.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default University;
