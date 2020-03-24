import React from 'react';
import './NavigationBar.scss';
import SettingsPopUp from '../SettingsPopUp/SettingsPopUp.jsx';

const NavigationBar = (props) => {
    return (
        <header className="header">
            <button className="header__create" title="Create new reminder">
                <i className="large material-icons header__create_icon">add</i>
            Create
        </button>
            <button className="header__today" title="Go to today">Today</button>
            <div className="weeks-selectors-block">
                <button className="weeks-selectors-block__previous-week" title="Previous week" data-direction="false">
                    <i className="large material-icons">chevron_left</i>
                </button>
                <button className="weeks-selectors-block__next-week" title="Next week" data-direction="true">
                    <i className="large material-icons">chevron_right</i>
                </button>
            </div>
            <span className="header__selected-period"></span>
            <div className="header__settings-actions">
                <button className="header__setting-btn" title="Settings">
                    <i className="large material-icons">settings</i>
                </button>
            </div>
            <SettingsPopUp />
        </header>
    )
}

export default NavigationBar;