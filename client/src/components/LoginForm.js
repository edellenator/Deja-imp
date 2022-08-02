import React, { useState } from "react";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault;
    setShowAlert(true);
    setUserFormData({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleFormSubmit} className="container w-50">
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
      {showAlert && <alert>Invalid credentials</alert>}
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
