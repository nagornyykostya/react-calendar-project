import React from 'react';
import './CreatePopupForm.scss';

const CreatePopupForm = () => {
    return (
        <div className="pop-up-form">
            <button className="pop-up-form__close-btn"><i className="large material-icons" title="Close">close</i></button>
            <form className="calendar-issues-form">
                <input className="calendar-issues-form__title-input" type="text" id="title" name="issue-title"
                    placeholder="Reminder title" maxlength="35" required />
                <div className="calendar-issues-form__date-block">
                    <i className="material-icons">access_time</i>
                    <input className="calendar-issues-form__date-input" type="date" id="date" name="date" required />
                    <input className="calendar-issues-form__start-time-input" type="time" id="startTime" name="start-time"
                        step="900" required />
                    <input className="calendar-issues-form__finish-time-input" type="time" id="finishTime" name="finish-time"
                        step="900" required />
                    <input className="calendar-issues-form__color-input" type="color" id="item-color" name="item-color" />
                </div>
                <textarea className="calendar-issues-form__description-input" name="description" id="description"
                    placeholder="Add description"></textarea>
                <div className="calendar-issues-form__actions">
                    <button className="calendar-issues-form__delete-btn" type="button" disabled title="Delete">Delete</button>
                    <button className="calendar-issues-form__submit-btn" type="submit" title="Save">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePopupForm;