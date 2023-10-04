import { useContext } from "react";
import ReservationContext from "../../../store/reservation-context";

const HourItem = (props) => {
  const reaservationCtx = useContext(ReservationContext);

  const itemClickHandler = () => {
    reaservationCtx.setUserInput((prev) => {
      return { ...prev, date: props.date };
    });

    reaservationCtx.setCurrentStage((prev) => {
      return prev + 1;
    });
  };

  return (
    <td onClick={itemClickHandler}>
      {new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric"
      }).format(props.date)}
    </td>
  );
};

export default HourItem;
