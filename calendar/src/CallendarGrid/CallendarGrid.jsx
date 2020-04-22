import React from 'react';
import HourSideBarCell from '../HourSideBarCell/HourSideBarCell.jsx';
import DayColumn from '../DayColumn/DayColumn.jsx';

const weekDays = [0, 1, 2, 3, 4, 5, 6];
const arrOfHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const miliSecondsPerDay = 86400000;

const isSameDate = (item, currentWeekStart) =>
    new Date(item.date).getMonth() === new Date(currentWeekStart).getMonth()
    && new Date(item.date).getFullYear() === new Date(currentWeekStart).getFullYear()
    && new Date(item.date).getDate() === new Date(currentWeekStart).getDate();

const getRemindersArrFilteredByDay = (reminders, currentWeekStart) => reminders.filter((item) => isSameDate(item, currentWeekStart));

const CallendarGrid = (props) => {

    const { currentWeekStart, reminders, handleOpenReminder, handleCreate } = props;

    return (<>
        <div className="hours-column">
            {arrOfHours.map((hour) => <HourSideBarCell key={hour} hour={hour} />)}
        </div>
        <div className="day-columns">
            {weekDays.map((weekDay) => {
                const columnDate = currentWeekStart + weekDay * miliSecondsPerDay;
                const remindersPerDay = getRemindersArrFilteredByDay(reminders, columnDate);
                return <DayColumn
                    columnDate={columnDate}
                    key={weekDay}
                    weekDay={weekDay}
                    remindersPerDay={remindersPerDay} 
                    handleOpenReminder={handleOpenReminder}
                    handleCreate={handleCreate} />
            })}
        </div>
    </>)
}

export default CallendarGrid;