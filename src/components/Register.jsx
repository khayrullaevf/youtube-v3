import React from "react";
import useRegister from "./useRegister";
import './register.css'

const Register = () => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    error,
    handleSubmit,
    handleFirstnameChange,
    handleLastnameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = useRegister();

  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Register</h1>
        <div className="form-control">
          <input
            type="text"
            onChange={handleFirstnameChange}
            value={firstName}
            placeholder="Enter your firstname"
          />
          {error.firstName && <p>{error.firstName}</p>}
        </div>
        <div className="form-control">
          <input
            type="text"
            onChange={handleLastnameChange}
            value={lastName}
            placeholder="Enter your  lastname"
          />
          {error.lastName && <p>{error.lastName}</p>}
        </div>
        <div className="form-control">
          <input
            type="text"
            onChange={handleEmailChange}
            value={email}
            placeholder="Enter your  email"
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div className="form-control">
          <input
            type="password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="Enter your  password"
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <div className="form-control">
          <input
            type="password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            placeholder="Confirm your  password"
          />
          {error.confirmPassword && <p>{error.confirmPassword}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
