import { useState } from "react";

const useInput = (validateIsValid) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validateIsValid(enteredValue);
  const enteredValueIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const enteredValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const enteredValueBlurHandler = (e) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(true);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    enteredValueIsInvalid,
    enteredValueHandler,
    enteredValueBlurHandler,
    reset
  };
};

export default useInput;
