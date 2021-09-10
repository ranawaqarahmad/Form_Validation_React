// import { useState } from "react";
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: nameInputValue,
    isValid: nameInputIsValid,
    enteredValueIsInvalid: nameInputIsInvalid,
    enteredValueHandler: nameValueHandler,
    enteredValueBlurHandler: nameValueBlurHandler,
    reset: resetNameHandler
  } = useInput((value) => value.trim() !== "");
  const {
    value: emailInputValue,
    isValid: emailInputIsValid,
    enteredValueIsInvalid: emailInputIsInvalid,
    enteredValueHandler: emailValueHandler,
    enteredValueBlurHandler: emailValueBlurHandler,
    reset: resetEmailHandler
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameInputIsValid && !emailInputIsValid) {
      return;
    }

    console.log(nameInputValue);
    console.log(emailInputValue);

    resetNameHandler();
    resetEmailHandler();
  };

  const formControlClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailControlClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={formControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameValueHandler}
          onBlur={nameValueBlurHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name Field must not be empty.. </p>
      )}
      <div className={emailControlClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailValueHandler}
          onBlur={emailValueBlurHandler}
        />
      </div>
      {emailInputIsInvalid && (
        <p className="error-text">Email Field must not be empty.. </p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
