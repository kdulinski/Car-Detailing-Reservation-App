import React from "react";
import DayItem from "./DayItem";
import HourItem from "./HourItem";
import styles from "./ReservationDate.module.css";
import datesDummy from "./DatesDummy";

const ReservationDate = () => {
  return (
    <React.Fragment>
      <h2>Chose date and hour.</h2>
      <table>
        <thead>
          <tr>
            <DayItem date={datesDummy[0][0]} />
            <DayItem date={datesDummy[1][0]} />
            <DayItem date={datesDummy[2][0]} />
            <DayItem date={datesDummy[3][0]} />
            <DayItem date={datesDummy[4][0]} />
            <DayItem date={datesDummy[5][0]} />
            <DayItem date={datesDummy[6][0]} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <HourItem date={datesDummy[0][0]} />
            <HourItem date={datesDummy[1][0]} />
            <HourItem date={datesDummy[2][0]} />
            <HourItem date={datesDummy[3][0]} />
            <HourItem date={datesDummy[4][0]} />
            <HourItem date={datesDummy[5][0]} />
            <HourItem date={datesDummy[6][0]} />
          </tr>
          <tr>
            <HourItem date={datesDummy[0][1]} />
            <HourItem date={datesDummy[1][1]} />
            <HourItem date={datesDummy[2][1]} />
            <HourItem date={datesDummy[3][1]} />
            <HourItem date={datesDummy[4][1]} />
            <HourItem date={datesDummy[5][1]} />
            <HourItem date={datesDummy[6][1]} />
          </tr>
          <tr>
            <HourItem date={datesDummy[0][2]} />
            <HourItem date={datesDummy[1][2]} />
            <HourItem date={datesDummy[2][2]} />
            <HourItem date={datesDummy[3][2]} />
            <HourItem date={datesDummy[4][2]} />
            <HourItem date={datesDummy[5][2]} />
            <HourItem date={datesDummy[6][2]} />
          </tr>
          <tr>
            <HourItem date={datesDummy[0][3]} />
            <HourItem date={datesDummy[1][3]} />
            <HourItem date={datesDummy[2][3]} />
            <HourItem date={datesDummy[3][3]} />
            <HourItem date={datesDummy[4][3]} />
            <HourItem date={datesDummy[5][3]} />
            <HourItem date={datesDummy[6][3]} />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ReservationDate;
