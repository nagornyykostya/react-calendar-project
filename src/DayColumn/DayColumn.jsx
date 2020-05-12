import React from 'react';
import PropTypes from "prop-types";
import HourCell from '../HourCell/HourCell.jsx';
import CurrentTimeLine from '../CurrentTimeLine/CurrentTimeLine.jsx'
const moment = require("moment");


const arrOfHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];


const DayColumn = ({ remindersPerDay, weekDay, handleOpenReminder, columnDate, handleCreate }) => {

    const isSameDate = moment(+columnDate).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")

    return (
        <div className="day-column"
            data-date={columnDate}
            key={weekDay}
            onClick={(e)=>handleCreate(e)}>
            {arrOfHours.map((hour) =>
                <HourCell
                    hour={hour}
                    remindersPerDay={remindersPerDay}
                    key={hour} 
                    handleOpenReminder={handleOpenReminder} />)}
            {isSameDate ? <CurrentTimeLine /> : null} 
        </div>
        

    )
}

export default DayColumn;

DayColumn.propTypes = {
    remindersPerDay: PropTypes.array,
    weekDay: PropTypes.number,
    handleOpenReminder: PropTypes.func,
    columnDate: PropTypes.number,
    handleCreate: PropTypes.func
}