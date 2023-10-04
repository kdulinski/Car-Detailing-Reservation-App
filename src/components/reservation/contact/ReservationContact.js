import React from "react";
import { useContext, useReducer } from "react";
import ReaservationContext from "../../../store/reservation-context";
import styles from "./ReservationContact.module.css";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const ReservationContact = () => {
  const reservationCtx = useContext(ReaservationContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const emailBlurHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  return (
    <React.Fragment>
      <h2>Provide your contact details.</h2>
      <form>
        <div className={styles.box}>
          <div className={styles.group}>
            <label htmlFor="phone">Phone number</label>
            <input id="phone" type="text" />
          </div>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailState.isValid ? "Correct" : "Incorrect"}
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.group}>
            <label htmlFor="car-registration-number">Registration number</label>
            <input id="car-registration-number" type="text" />
          </div>
          <div className={styles.group}>
            <label htmlFor="car-model">Car model</label>
            <input id="car-model" type="text" />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ReservationContact;
