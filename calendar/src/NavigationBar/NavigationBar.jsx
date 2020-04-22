import React, { Component } from 'react';
import { getMonday } from '../Calendar/getMonday.js';
import SettingsPopUp from '../SettingsPopUp/SettingsPopUp.jsx';
import CurrentPeriodText from '../CurrentPeriodText/CurrentPeriodText.jsx'
import './NavigationBar.scss';

const miliSecondsPerDay = 86400000;

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSettingsOpen: false
        }
    }

    handleWeekChange = (event) => {
        const direction = event.target.parentElement.dataset.direction === 'true';
        if (direction) {
           this.props.setCurrentWeekStart(this.props.currentWeekStart + (7 * miliSecondsPerDay));
        } else {
            this.props.setCurrentWeekStart(this.props.currentWeekStart - (7 * miliSecondsPerDay));
        }
    }

    handleTodayClick = () => {
        this.props.setCurrentWeekStart(getMonday());
    }

    handleSettingsShow = () => {
        this.setState({
            isSettingsOpen: !this.state.isSettingsOpen
        })
    }

    render() {
        const {currentWeekStart, handleCreate, defaultColor, handleColorUpdate} = this.props

    return (
        <header className="header">
            <button className="header__create"
                title="Create new reminder"
                name="create-btn"
                onClick={(e) => handleCreate(e)}>
                <i className="large material-icons header__create_icon">add</i>
            Create
        </button>
            <button className="header__today" title="Go to today"
                onClick={() => this.handleTodayClick()}>Today</button>
            <div className="weeks-selectors-block">
                <button className="weeks-selectors-block__previous-week"
                    title="Previous week"
                    data-direction="false"
                    onClick={(e) => this.handleWeekChange(e)}>
                    <i className="large material-icons">chevron_left</i>
                </button>
                <button className="weeks-selectors-block__next-week"
                    title="Next week"
                    data-direction="true"
                    onClick={(e) => this.handleWeekChange(e)}>
                    <i className="large material-icons">chevron_right</i>
                </button>
            </div>
            <CurrentPeriodText currentWeekStart={currentWeekStart} />
            <div className="header__settings-actions">
                <button className="header__setting-btn" title="Settings" onClick={() => this.handleSettingsShow()}>
                    <i className="large material-icons">settings</i>
                </button>
            </div>
            {this.state.isSettingsOpen && <SettingsPopUp handleColorUpdate={handleColorUpdate} handleSettingsShow = {this.handleSettingsShow} defaultColor={defaultColor} />}
        </header>
    )
}
}

export default NavigationBar;