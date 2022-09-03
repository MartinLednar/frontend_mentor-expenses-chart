import "./days-container.scss";
import DayContainer from "../day-container/day-container.component";

const DaysContainer = ({ daysData }) => {
  const currentDay = new Date().getDay();

  return (
    <div className="days-container">
      {daysData.map((day, i) => (
        <DayContainer key={i} {...day} isActive={currentDay === day.id} />
      ))}
    </div>
  );
};

export default DaysContainer;
