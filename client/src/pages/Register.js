import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";

const Registration = () => {
  const [registered, setRegistered] = useState(true);

  return (
    <>
      {registered && <LoginForm setRegistered={setRegistered} />}
      {!registered && <SignUpForm setRegistered={setRegistered} />}
    </>
  );
};

export default Registration;
