import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { validateEmail, capitalizeFirstLetter } from "../utils/helpers";
import Auth from "../utils/auth";

const SignUpForm = ({ setRegistered }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userFormData, setUserFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [addUser, { loading }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    // if (event.target.name === "email") {
    //   const isValid = validateEmail(event.target.value);
    //   if (!isValid) {
    //     setErrorMessage("Your email is invalid");
    //   } else {
    //     setErrorMessage("");
    //   }
    // } else {
    //   if (!event.target.value.length) {
    //     setErrorMessage(
    //       capitalizeFirstLetter(`${event.target.name} is required.`)
    //     );
    //   } else {
    //     setErrorMessage("");
    //   }
    // }
    // if (!errorMessage) {
    //   setUserFormData({
    //     ...userFormData,
    //     [event.target.name]: event.target.value,
    //   });

    // }

    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(userFormData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);

    try {
      const { data } = await addUser({ variables: { ...userFormData } });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong!");
    }

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
        onChange={handleInputChange}
        value={email}
      />
      <label htmlFor="username" className="form-label">
        Username:
      </label>
      <input
        name="username"
        className="form-input"
        placeholder="username"
        type="text"
        onChange={handleInputChange}
        value={username}
      />
      <label htmlFor="password" className="form-label">
        Password:
      </label>
      <input
        name="password"
        className="form-input"
        placeholder="password"
        type="password"
        onChange={handleInputChange}
        value={password}
      />
      {errorMessage && <p className="text-tertiary">{errorMessage}</p>}
      {loading ? (
        <button className="btn">Submitting...</button>
      ) : (
        <button type="submit" className="btn">
          Submit
        </button>
      )}

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
