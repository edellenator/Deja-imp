import React, { useState } from "react";

const LoginForm = ({ setRegistered }) => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(userFormData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setShowAlert(true);
    setUserFormData({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleFormSubmit} className="container w-50 my-5 py-5">
      <h2>Login</h2>
      <label htmlFor="username" className="form-label">
        Username:
      </label>
      <input
        name="username"
        className="form-input"
        placeholder="username"
        type="text"
        onChange={handleInputChange}
        value={userFormData.username}
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
      {showAlert && <p className="text-tertiary">Invalid credentials</p>}
      <button type="submit" className="btn">
        Submit
      </button>
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
