import { useState } from "react";

const useRegister = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formValid = true;
    const updateError = {
      firstName: firstName ? "" : "Firstname is requried",
      lastName: lastName ? "" : "Lastname is requried",
      email: validateEmail(email) ? "" : "invalid email address",
      password: validatePassword(password) ? "" : "Kamida 6ta son ishlating",
      confirmPassword:
        password === confirmPassword ? "" : "password mos kelmadi",
    };

    Object.keys(updateError).forEach((key) => {
      if (updateError[key]) {
        formValid = false;
      }
    });

    if (!formValid) {
      setError(updateError);
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", JSON.stringify(password));

    window.location.assign("/");
    console.log("submitted");
  };

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    error,
    handleFirstnameChange: (event) => {
      setFirstname(event.target.value.trim());
      setError({ ...error, firstName: "" });
    },
    handleLastnameChange: (event) => {
      setLastname(event.target.value.trim());
      setError({ ...error, lastName: "" });
    },
    handleEmailChange: (event) => {
      setEmail(event.target.value.trim());
      setError({ ...error, email: "" });
    },
    handlePasswordChange: (event) => {
      setPassword(event.target.value.trim());
      setError({ ...error, password: "" });
    },
    handleConfirmPasswordChange: (event) => {
      setconfirmPassword(event.target.value.trim());
      setError({ ...error, confirmPassword: "" });
    },
    handleSubmit,
  };
};

export default useRegister;
