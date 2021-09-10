import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameValueIsValid,
    enteredValueIsInvalid: nameValueIsInvalid,
    enteredValueHandler: nameValueHandler,
    enteredValueBlurHandler: nameValueBlurHandler,
    reset: resetNameField
  } = useInput((value) => value.trim());

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    enteredValueIsInvalid: lastNameIsInvalid,
    enteredValueHandler: lastNameValueHandler,
    enteredValueBlurHandler: lastNameBlurHandler,
    reset: resetLastNameField
  } = useInput((value) => value.trim());

  const {
    value: emailValue,
    isValid: emailIsValid,
    enteredValueIsInvalid: emailValueIsInvalid,
    enteredValueHandler: emailValueHandler,
    enteredValueBlurHandler: emailValueBlurHandler,
    reset: resetEmailField
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (nameValueIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameValueIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }
    resetNameField();
    resetLastNameField();
    resetEmailField();
  };

  const nameFieldClasses = nameValueIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameFieldClasses = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailFieldClasses = emailValueIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameFieldClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameValueHandler}
            onBlur={nameValueBlurHandler}
            value={nameValue}
          />
          {nameValueIsInvalid && (
            <p className="error-text">Name Field must not be empty..</p>
          )}
        </div>

        <div className={lastNameFieldClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameValueHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Last Name Field must not be empty..</p>
          )}
        </div>
      </div>
      <div className={emailFieldClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailValueHandler}
          onBlur={emailValueBlurHandler}
          value={emailValue}
        />
        {emailValueIsInvalid && (
          <p className="error-text">Email Field must not be empty..</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
