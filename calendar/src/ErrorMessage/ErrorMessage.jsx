import React from 'react';
import './ErrorMessage.scss'

const ErrorMessage = (props) => {
    return (
        <div className="error-popup">
        <h3 className="error-popup__message"></h3>
        <button className="error-popup__close-modal-btn">
            <i className="large material-icons">close</i>
            </button>
    </div>
    )
};

export default ErrorMessage;