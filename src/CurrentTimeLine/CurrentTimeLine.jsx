import React from "react";

const CurrentTimeLine = () => {
  const currentMinute = new Date().getHours() * 60 + new Date().getMinutes();
  return (
    <div
      className="day-column__current-time-line"
      style={{ top: `${currentMinute}px` }}
    >
      <div className="day-column__current-time">
        {new Date().getHours()}:
        {new Date().getMinutes() < 10
          ? `0${new Date().getMinutes()}`
          : new Date().getMinutes()}
      </div>
    </div>
  );
};

export default CurrentTimeLine;
