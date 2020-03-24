import React from 'react';

const SettingsPopUp = (props) => {
    return (
        <div className="header__settings-modal">
                <button className="header__close-modal-btn" id="close-modal-btn" title="Close"><i
                    className="large material-icons">close</i></button>
                <form className="header__settings-form">
                    <div className="header__settings-configes">
                        <label className="header__color-label" htmlFor="item-color">Default color:</label>
                        <input className="header__color-input" type="color" id="base-color" name="base-color" />
                    </div>
                    <button className="header__submit-btn" type="submit">Save</button>
                </form>
            </div>
    )
};

export default SettingsPopUp;