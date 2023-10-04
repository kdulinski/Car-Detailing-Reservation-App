import React from "react";

const ReservationContext = React.createContext({
  userInput: null,
  setUserInput: () => {},
  setCurrentStage: () => {}
});

export default ReservationContext;
