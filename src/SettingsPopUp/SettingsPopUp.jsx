import React, { Component } from "react";
import PropTypes from "prop-types";

class SettingsPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultColor: "#1a73e8",
    };
  }

  componentDidMount() {
    this.setState({
      defaultColor: this.props.defaultColor,
    });
  }

  handleColorChange = (e) => {
    this.setState({ defaultColor: e.target.value });
  };

  handleSaveColor = (e) => {
    e.preventDefault();
    this.props.handleColorUpdate(this.state.defaultColor);
    this.props.handleSettingsShow();
  };

  render() {
    const { handleSettingsShow } = this.props;
    return (
      <div className="header__settings-modal">
        <button
          className="header__close-modal-btn"
          id="close-modal-btn"
          title="Close"
          onClick={() => handleSettingsShow()}
        >
          <i className="large material-icons">close</i>
        </button>
        <form className="header__settings-form">
          <div className="header__settings-configes">
            <label className="header__color-label" htmlFor="item-color">
              Default color:
            </label>
            <input
              className="header__color-input"
              type="color"
              id="base-color"
              name="base-color"
              onChange={(e) => this.handleColorChange(e)}
              value={this.state.defaultColor}
            />
          </div>
          <button
            className="header__submit-btn"
            type="submit"
            onClick={(e) => this.handleSaveColor(e)}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default SettingsPopUp;

SettingsPopUp.propTypes = {
  defaultColor: PropTypes.string,
  handleSettingsShow: PropTypes.func,
};
