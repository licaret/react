import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "../Paper/Paper";
import styles from "./Tutors.module.css";
import FormTutors from "../FormTutors/FormTutors";
import ThemedButton from "../ThemedButton/ThemedButton";

const Tutors = ({ tutors }) => {
  const [showForm, setShowForm] = useState(false);
  const [tutorsData, setTutorsData] = useState(tutors);

  const handleRemoveTutor = (id) => {
    setTutorsData(tutorsData.filter((tutor) => tutor.id !== id));
  };

  const renderTutorsPapers = () =>
    tutorsData.map((tutor) => {
      return (
        <Paper key={tutor.id}>
          <div className={styles.tutorsContainer}>
            <div className={styles.tutorName}>
              <p>{tutor.firstName}</p>
              <p>{tutor.lastName}</p>
            </div>

            <div className={styles.tutorContacts}>
              <p>{tutor.phone}</p>
              <p>{tutor.email}</p>
              <p>{tutor.city}</p>
            </div>

            <p>{tutor.options}</p>

            <ThemedButton onClick={() => handleRemoveTutor(tutor.id)}>
              Remove Tutor
            </ThemedButton>
          </div>
        </Paper>
      );
    });

  const handleFormSubmit = (newTutorData) => {
    setTutorsData([...tutorsData, newTutorData]);
    setShowForm(false);
  };

  return (
    <>
      <div className={styles.wrapper}>{renderTutorsPapers()}</div>
      {showForm ? (
        <FormTutors updateParentState={handleFormSubmit} />
      ) : (
        <ThemedButton onClick={() => setShowForm(true)}>
          Add Tutor
        </ThemedButton>
      )}
    </>
  );
};

Tutors.propTypes = {
  tutors: PropTypes.arrayOf(PropTypes.object),
};

export default Tutors;
