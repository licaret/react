import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "../Paper/Paper";
import styles from "./Tutors.module.css";
import { nanoid } from "nanoid";

const Tutors = ({ tutors }) => {
  const [showForm, setShowForm] = useState(false);
  const [tutorsData, setTutorsData] = useState(tutors);

  const renderTutorsPapers = () =>
    tutorsData.map((tutor) => {
      const id = nanoid();
      return (
        <Paper key={id}>
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
          </div>
        </Paper>
      );
    });

  const handleFormSubmit = (abstractData) => {
    setTutorsData([...tutorsData, abstractData]);
  };

  const renderAddNewTutorForm = () => (
    <form>
      <input type="text" name="surname" id="surname" placeholder="Surname" />
      <input type="text" name="name" id="name" placeholder="Name" />
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
      />
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="text" name="city" id="city" placeholder="City" />

      <button onClick={handleFormSubmit}>Invite</button>
    </form>
  );

  return (
    <div className={styles.wrapper}>
      {renderTutorsPapers()}
      {showForm ? (
        renderAddNewTutorForm()
      ) : (
        <button onClick={() => setShowForm(true)}>Add Tutor</button>
      )}
    </div>
  );
};

Tutors.propTypes = {
  tutors: PropTypes.arrayOf(PropTypes.object),
};

export default Tutors;
