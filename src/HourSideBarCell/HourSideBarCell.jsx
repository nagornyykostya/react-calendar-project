import React from 'react';

const HourSideBarCell = (props) => {
    const { hour } = props;
    return (
        <div className="hours-column__hour-cell">{hour < 10 ? `0${hour}` : hour}:00</div>
    )
}

export default HourSideBarCell;