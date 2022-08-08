import React, { useState } from "react";
import { validateEmail, capitalizeFirstLetter } from "../utils/helpers";

const SignUpForm = ({ setRegistered }) => {
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);
    setUserFormData({ email: "", username: "", password: "" });
  };

  const { email, username, password } = userFormData;

  return (
    <form onSubmit={handleFormSubmit} className=" container w-50 my-5 py-5">
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
        defaultValue={email}
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
        defaultValue={username}
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
        defaultValue={password}
      />
      {errorMessage && <p className="text-tertiary">{errorMessage}</p>}
      <button type="submit" className="btn">
        Submit
      </button>

      <p>
        Already registered? Click{" "}
        <span className="text-primary" onClick={() => setRegistered(true)}>
          here
        </span>{" "}
        to login.
      </p>
    </form>
  );
};

export default SignUpForm;
