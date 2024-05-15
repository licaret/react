import React, { useState } from "react";
import Paper from "../Paper/Paper";
import styles from "./Tutors.module.css";
import FormTutors from "../FormTutors/FormTutors";
import ThemedButton from "../ThemedButton/ThemedButton";
import withLogging from "../../decorators/withLogging";
import useFetch from "../../hooks/useFetch";
import { JSON_PLACEHOLDER_USERS_URL } from "../../helpers/constants";
import { useSearchParams } from "react-router-dom";

const Tutors = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId") || 1;

  const formatData = (data) =>
    data.map((tutor) => {
      const fullNameArr = tutor.name.split(" ");
      const firstName = fullNameArr[0];
      const lastName = fullNameArr[1];
      return {
        id: tutor.id,
        firstName,
        lastName,
        phone: tutor.phone,
        email: tutor.email,
        city: tutor.address.city,
        options: "Group creation",
      };
    });

  const {
    data: tutorsData,
    setData: setTutorsData,
    isLoading,
    error,
  } = useFetch(`${JSON_PLACEHOLDER_USERS_URL}/${userId}`, formatData);

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

  if (error) return <h2>Error</h2>;

  if (isLoading || !tutorsData) return <h2>Loading...</h2>;

  return (
    <>
      <div className={styles.wrapper}>{renderTutorsPapers()}</div>
      {showForm ? (
        <FormTutors updateParentState={handleFormSubmit} />
      ) : (
        <ThemedButton onClick={() => setShowForm(true)}>Add Tutor</ThemedButton>
      )}
    </>
  );
};

export default withLogging(Tutors);
