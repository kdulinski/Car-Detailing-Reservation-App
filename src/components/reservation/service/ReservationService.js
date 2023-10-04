import React, { useContext } from "react";
import styles from "./ReservationService.module.css";
import ServiceItem from "./ServiceItem";
import service01 from "../../../assets/service01.jpg";
import service02 from "../../../assets/service02.jpg";
import service03 from "../../../assets/service03.jpg";

const ReservationService = () => {
  return (
    <React.Fragment>
      <h2>Chose your Service.</h2>
      <div className={styles.services}>
        <ServiceItem image={service01} description="Service No. 1" />
        <ServiceItem image={service02} description="Service No. 2" />
        <ServiceItem image={service03} description="Service No. 3" />
      </div>
    </React.Fragment>
  );
};

export default ReservationService;
