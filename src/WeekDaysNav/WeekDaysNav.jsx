import React from 'react';
import './WeekDaysNav.scss'

const WeekDaysNav = (props) => {
    const { currentWeekStart } = props;
    const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const miliSecondsPerDay = 86400000;

    const navBarElements = weekDays.map((item) => {
        const i = weekDays.indexOf(item);
        const currentWeekDayTime = new Date(currentWeekStart).getTime() + (i * miliSecondsPerDay);
        const todayWeekDay = new Date().getDate() === new Date(currentWeekDayTime).getDate()
        && new Date().getMonth() === new Date(currentWeekDayTime).getMonth()
        ? "navigation__date-of-month_selected"
        : "";

        return <div key={item} className="navigation__day">
            <span className="navigation__day-of-week">{item}</span>
            <span className={`navigation__date-of-month 
               ${todayWeekDay}`}>
                {new Date(currentWeekDayTime).getDate()}
            </span>
        </div>
    });

    return (
        <nav className="navigation">
            <div className="navigation__gmt">
                GMT+02
            </div>
            <div className="navigation__grid">
                {navBarElements}
            </div>
        </nav>
    )
}

export default WeekDaysNav;