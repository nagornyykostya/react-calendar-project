import React from "react";
import PropTypes from "prop-types";
import "./ErrorMessage.scss";

const ErrorMessage = ({ handleErrorClose }) => {
  return (
    <div className="error-popup">
      <h3 className="error-popup__message">
        Internal Server Error. Can't display events
      </h3>
      <button
        className="error-popup__close-modal-btn"
        onClick={() => handleErrorClose()}
      >
        <i className="large material-icons">close</i>
      </button>
    </div>
  );
};

export default ErrorMessage;

ErrorMessage.PropTypes = {
  handleErrorClose: PropTypes.func,
};
