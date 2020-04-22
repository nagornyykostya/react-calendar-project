import React, { Component } from 'react';
import './CreateReminderForm.scss';

class CreateReminderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
                title: "",
                date: "",
                startTime: "",
                finishTime: "",
                itemColor: "#5a95e2",
                description: "",
                id: ""
            
        }
    }
    componentDidMount() {
        this.setState({
            ...this.props.reminderForm
        })
    }

    handleFormChange = (e) => {
        const { name, value } = e.target;
        const newFormData = { ...this.state }
        newFormData[name] = value;
        this.setState({
             ...newFormData 
        })
    }

    render() {
        const { title, date, startTime, finishTime, itemColor, description } = this.state;
        return (
            <div className="pop-up-form">
                <button className="pop-up-form__close-btn"><i className="large material-icons" title="Close" onClick={() => this.props.handlePopUpOpen()}>close</i></button>
                <form className="calendar-issues-form" onSubmit={(e) => this.props.handleSaveReminder(e, this.state)}>
                    <input className="calendar-issues-form__title-input" type="text" id="title" name="title" value={title} onChange={(e) => this.handleFormChange(e)}
                        placeholder="Reminder title" maxLength="35" required />
                    <div className="calendar-issues-form__date-block">
                        <i className="material-icons">access_time</i>
                        <input className="calendar-issues-form__date-input" type="date" id="date" name="date" value={date} onChange={(e) => this.handleFormChange(e)} required />
                        <input className="calendar-issues-form__start-time-input" type="time" id="startTime" name="startTime" onChange={(e) => this.handleFormChange(e)} value={startTime}
                            step="900" required />
                        <input className="calendar-issues-form__finish-time-input" type="time" id="finishTime" name="finishTime" onChange={(e) => this.handleFormChange(e)} value={finishTime}
                            step="900" required />
                        <input className="calendar-issues-form__color-input" type="color" id="item-color" name="itemColor" onChange={(e) => this.handleFormChange(e)} value={itemColor} />
                    </div>
                    <textarea className="calendar-issues-form__description-input" name="description" id="description" onChange={(e) => this.handleFormChange(e)} value={description}
                        placeholder="Add description"></textarea>
                    <div className="calendar-issues-form__actions">
                        <button className="calendar-issues-form__delete-btn" type="button" disabled={!this.state.id} title="Delete" onClick={(e) => this.props.handleDeleteReminder(e, this.state.id)}>Delete</button>
                        <button className="calendar-issues-form__submit-btn" type="submit" title="Save">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateReminderForm;