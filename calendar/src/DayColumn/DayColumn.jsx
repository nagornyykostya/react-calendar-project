import React from 'react';
import HourCell from '../HourCell/HourCell.jsx';

const arrOfHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];


const DayColumn = ({ remindersPerDay, weekDay, handleOpenReminder, columnDate, handleCreate }) => {

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
        </div>

    )
}

export default DayColumn;