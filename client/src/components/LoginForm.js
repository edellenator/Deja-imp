import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = ({ setRegistered }) => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(userFormData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({ variables: { ...userFormData } });
      Auth.login(data.login.token);
    } catch (error) {
      console.log(error);
    }

    setUserFormData({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleFormSubmit} className="container w-50 my-5 py-5">
      <h2>Login</h2>
      <label htmlFor="username" className="form-label">
        Email:
      </label>
      <input
        name="email"
        className="form-input"
        placeholder="email"
        type="email"
        onChange={handleInputChange}
        value={userFormData.email}
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
        value={userFormData.password}
      />
      {error && <p className="text-tertiary">Invalid credentials</p>}
      {loading ? (
        <button className="btn">Submitting...</button>
      ) : (
        <button type="submit" className="btn">
          Submit
        </button>
      )}
      <p>
        Not registered? Click{" "}
        <span className="text-primary" onClick={() => setRegistered(false)}>
          here
        </span>{" "}
        to sign up.
      </p>
    </form>
  );
};

export default LoginForm;
