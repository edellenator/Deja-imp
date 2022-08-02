import React, { useState } from "react";
import { validateEmail, capitalizeFirstLetter } from "../utils/helpers";

const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userFormData, setUserFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(
          capitalizeFirstLetter(`${event.target.name} is required.`)
        );
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setUserFormData({
        ...userFormData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleFormSubmit = async (e) => {
    setUserFormData({ email: "", username: "", password: "" });
  };

  return (
    <form onSubmit={handleFormSubmit} className=" container w-50">
      <h2>Sign Up</h2>
      <label htmlFor="email" className="form-label">
        Email:
      </label>
      <input
        name="email"
        className="form-input"
        placeholder="email"
        type="email"
        onBlur={handleInputChange}
        defaultValue={userFormData.email}
      />
      <label htmlFor="username" className="form-label">
        Username:
      </label>
      <input
        name="username"
        className="form-input"
        placeholder="username"
        type="text"
        onBlur={handleInputChange}
        defaultValue={userFormData.username}
      />
      <label htmlFor="password" className="form-label">
        Password:
      </label>
      <input
        name="password"
        className="form-input"
        placeholder="password"
        type="password"
        onBlur={handleInputChange}
        defaultValue={userFormData.password}
      />
      <button type="submit" className="btn">
        Submit
      </button>
      {errorMessage && <alert>{errorMessage}</alert>}
    </form>
  );
};

export default SignUpForm;
