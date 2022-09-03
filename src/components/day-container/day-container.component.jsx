import "./day-container.styles.scss";

const DayContainer = ({ day, amount, isActive }) => (
  <div className="day-container">
    <div className="day-amount">${amount}</div>
    <div className={isActive ? "day-column active" : "day-column"} style={{ height: `${amount}px` }} />
    <h3>{day}</h3>
  </div>
);

export default DayContainer;
