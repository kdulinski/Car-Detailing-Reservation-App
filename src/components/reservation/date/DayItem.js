const DayItem = (props) => {
  return (
    <th>
      {new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
      }).format(props.date)}
    </th>
  );
};

export default DayItem;
