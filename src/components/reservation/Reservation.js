import React from "react";
import { useState } from "react";
import styles from "./Reservation.module.css";
import ReservationService from "./service/ReservationService";
import ReservationDate from "./date/ReservationDate";
import ReservationContact from "./contact/ReservationContact";
import ReservationConfirm from "./confirm/ReservationConfirm";
import ReservationContext from "../../store/reservation-context";

const Reservation = (props) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [userInput, setUserInput] = useState({
    service: null,
    date: null,
    phone: null,
    email: null,
    carRegistrationNumber: null,
    carModel: null
  });

  const nextStageHandler = () => {
    setCurrentStage((prev) => {
      return prev + 1;
    });
  };

  const prevStageHandler = () => {
    setCurrentStage((prev) => {
      return prev - 1;
    });
  };

  let content;

  switch (currentStage) {
    case 0:
      content = <ReservationService onClickHandler={nextStageHandler} />;
      break;
    case 1:
      content = <ReservationDate onClickHandler={nextStageHandler} />;
      break;
    case 2:
      content = <ReservationContact onClickHandler={nextStageHandler} />;
      break;
    case 3:
      content = <ReservationConfirm />;
      break;
    default:
      content = "Out of Stages";
      break;
  }

  return (
    <ReservationContext.Provider
      value={{ userInput, setUserInput, setCurrentStage }}
    >
      <div className={styles.stages}>
        <div className={`${styles.stage} ${currentStage >= 0 && styles.activ}`}>
          Service
        </div>
        <div className={`${styles.stage} ${currentStage >= 1 && styles.activ}`}>
          Date
        </div>
        <div className={`${styles.stage} ${currentStage >= 2 && styles.activ}`}>
          Contact
        </div>
        <div className={`${styles.stage} ${currentStage >= 3 && styles.activ}`}>
          Confirm
        </div>
      </div>
      {content}
      <div className={styles.actions}>
        <button onClick={prevStageHandler}>prev</button>
        <button onClick={nextStageHandler}>next</button>
      </div>
    </ReservationContext.Provider>
  );
};

export default Reservation;
