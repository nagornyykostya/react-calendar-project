import React from 'react';
import Reminder from '../Reminder/Reminder.jsx';

const getRemindersByHourStart = (arr, hours) => arr.filter((item) => item.startTime.split(':')[0] == (hours < 10 ? `0${hours}` : `${hours}`));

const HourCell = ({ hour, remindersPerDay, handleOpenReminder }) => {

    const remindersPerHour = getRemindersByHourStart(remindersPerDay, hour);

    return (
        <div className="day-column__hour-cell"
            key={hour}
            id={`${hour < 10 ? `0${hour}` : hour}:00`}>
            {remindersPerHour.map((reminder) => <Reminder
                key={reminder.id}
                reminderObj={reminder}
                reminderIndex={remindersPerHour.indexOf(reminder)}
                handleOpenReminder={handleOpenReminder} />
            )}
        </div>
    )
}

export default HourCell;