import React from "react";
import { useContext } from "react";
import ReservationContext from "../../../store/reservation-context";

import styles from "./ServiceItem.module.css";

const ServiceItem = (props) => {
  const reaservationCtx = useContext(ReservationContext);

  const itemClickHandler = () => {
    reaservationCtx.setUserInput((prev) => {
      return { ...prev, service: props.description };
    });

    reaservationCtx.setCurrentStage((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className={styles.service} onClick={itemClickHandler}>
      <img src={props.image} alt="" />
      <div className={styles["service-description"]}>{props.description}</div>
    </div>
  );
};

export default ServiceItem;
