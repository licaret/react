import React, { useRef } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const FormTutors = ({ updateParentState }) => {
  const surnameRef = useRef();
  const nameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();

  const clearForm = () => {
    surnameRef.current.value = "";
    nameRef.current.value = "";
    phoneNumberRef.current.value = "";
    emailRef.current.value = "";
    cityRef.current.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: add validations for each field

    const id = nanoid();
    const newTutorData = {
      id,
      firstName: nameRef.current.value,
      lastName: surnameRef.current.value,
      phone: phoneNumberRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value,
      options: "Group creation, editing teacher profiles",
    };

    updateParentState(newTutorData);
    clearForm();
  };

  return (
    <form>
      <input
        ref={surnameRef}
        type="text"
        name="surname"
        id="surname"
        placeholder="Surname"
      />
      <input
        ref={nameRef}
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        ref={phoneNumberRef}
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
      />
      <input
        ref={emailRef}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <input
        ref={cityRef}
        type="text"
        name="city"
        id="city"
        placeholder="City"
      />

      <button onClick={handleSubmit}>Invite</button>
    </form>
  );
};

FormTutors.propTypes = {
  updateParentState: PropTypes.func.isRequired,
};

export default FormTutors;
