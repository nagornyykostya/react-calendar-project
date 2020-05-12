import React from 'react';
import PropTypes from "prop-types";


const miliSecondsPerDay = 86400000;
const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const CurrentPeriodText = ({ currentWeekStart }) => {

    const currentMonday = new Date(currentWeekStart);
    let checkDay = currentWeekStart;
    let period = `${monthes[currentMonday.getMonth()]} ${currentMonday.getFullYear()}`;

    for (let i = 0; i < 6; i++) {
        checkDay += miliSecondsPerDay;
        if (new Date(checkDay).getMonth() !== currentMonday.getMonth()) {
            if (new Date(checkDay).getFullYear() !== currentMonday.getFullYear()) {
                period = `${monthes[currentMonday.getMonth()]} ${currentMonday.getFullYear()} - ${monthes[new Date(checkDay).getMonth()]} ${new Date(checkDay).getFullYear()}`;
            } else {
                period = `${monthes[currentMonday.getMonth()]} - ${monthes[new Date(checkDay).getMonth()]} ${currentMonday.getFullYear()}`;
            }
        }
    }

    return (
        <span className="header__selected-period">
            {period}
        </span>
    )
}

export default CurrentPeriodText;

CurrentPeriodText.propTypes = {
    currentWeekStart: PropTypes.number
}