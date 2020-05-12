import React from "react";
import PropTypes from "prop-types";

const HourSideBarCell = ({ hour }) => (
  <div className="hours-column__hour-cell">
    {hour < 10 ? `0${hour}` : hour}:00
  </div>
);

export default HourSideBarCell;

HourSideBarCell.propTypes = {
    hour: PropTypes.number
}