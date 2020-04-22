import React from 'react';
import { getDuration, getMinutesStart } from './remindersGetters.js';

const Reminder = ({ reminderObj, reminderIndex, handleOpenReminder }) => {
    const { finishTime, startTime, itemColor, title, id } = reminderObj;
    const duration = getDuration(finishTime, startTime);
    const startMinutes = getMinutesStart(startTime);

    const reminderStyle = {
        minHeight: `${duration}px`,
        top: `${+startMinutes + 5 + (reminderIndex * 5)}px`,
        left: `${reminderIndex > 0 ? (reminderIndex * 2) * 10 : reminderIndex + 4}px`,
        backgroundColor: itemColor
    };

    return (
        <div className="day-column__reminder-item"
            style={reminderStyle}
            id={id}
            onClick={(e) => handleOpenReminder(e)}
        >
            <span className="day-column__reminder-item-title">
                <span className="day-column__reminder-item-number">#{reminderIndex + 1}
                </span> {title}
            </span>
            <br />
            <span>
                <i className="large material-icons day-column__reminder-item-number">access_time</i> {startTime} - {finishTime}
            </span>
        </div>
    )
}

export default Reminder;