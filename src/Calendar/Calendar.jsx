/* eslint-disable import/extensions */
import React, { Component } from "react";
import { getMonday } from "./getMonday.js";
import NavigationBar from "../NavigationBar/NavigationBar.jsx";
import CreateReminderForm from "../CreatePopupForm/CreatePopupForm.jsx";
import {
  getReminders,
  postReminder,
  deleteReminder,
  updateReminder,
  getDefaultColor,
  updateDefaultColor,
} from "./gateWay.js";
import CallendarGrid from "../CallendarGrid/CallendarGrid.jsx";
import WeekDaysNav from "../WeekDaysNav/WeekDaysNav.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import "./dayCells.scss";

const moment = require("moment");

class Calendar extends Component {
  constructor() {
    super();

    this.state = {
      currentWeekStart: getMonday(),
      reminders: [],
      defaultColor: "#1a73e8",
      isPopUpOpen: false,
      isLoading: false,
      isError: false,
      reminderForm: {},
    };
  }

  componentDidMount() {
    this.fetchDefaultColor();
    this.fetchReminders();
  }

  fetchReminders = () => {
    this.setState({ isLoading: true });
    getReminders()
      .then((data) => {
        this.setState({
          reminders: data,
          isPopUpOpen: false,
          isLoading: false,
        });
      })
      .catch(() => this.setState({ isError: true }));
  };

  fetchDefaultColor = () => {
    this.setState({ isLoading: true });
    getDefaultColor()
      .then((data) => {
        this.setState({
          defaultColor: data[0].defaultColor,
        });
      })
      .catch(() => this.setState({ isError: true }));
  };

  setCurrentWeekStart = (newDate) => {
    this.setState({
      currentWeekStart: newDate,
    });
  };

  handleCreate = (e) => {
    const { className, parentElement, id } = e.nativeEvent.target;
    const newFormData = {
      title: "",
      startTime: "",
      finishTime: "",
      itemColor: this.state.defaultColor,
      description: "",
    };

    this.handlePopUpOpen();
    if (className === "header__create") {
      newFormData.date = moment().format("YYYY-MM-DD");

      this.setState({
        reminderForm: { ...newFormData },
      });
    } else {
      newFormData.date = moment(+parentElement.dataset.date).format(
        "YYYY-MM-DD"
      );
      newFormData.startTime = id;
      this.setState({
        reminderForm: { ...newFormData },
      });
    }
  };

  handlePopUpOpen = () => {
    this.setState({
      isPopUpOpen: !this.state.isPopUpOpen,
    });
  };

  handleSaveReminder = (e, formData) => {
    e.preventDefault();
    if (!formData.id) {
      postReminder(formData)
        .then(() => this.fetchReminders())
        .catch(() => this.setState({ isError: true }));
    } else {
      updateReminder(formData, formData.id)
        .then(() => this.fetchReminders())
        .catch(() => this.setState({ isError: true }));
    }
  };

  handleDeleteReminder = (e, id) => {
    e.preventDefault();
    deleteReminder(id)
      .then(() => this.fetchReminders())
      .catch(() => this.setState({ isError: true }));
  };

  handleColorUpdate = (color) => {
    updateDefaultColor(color)
      .then(() => this.fetchDefaultColor())
      .catch(() => this.setState({ isError: true }));
  };

  handleOpenReminder = (e) => {
    e.stopPropagation();
    if (e.target.id) {
      const reminderSelected = this.state.reminders.find(
        (reminder) => reminder.id === e.target.id
      );
      this.setState({
        reminderForm: { ...reminderSelected },
        isPopUpOpen: true,
      });
    }
  };

  handleErrorClose = () => {
    this.setState({ isError: false });
  };

  render() {
    const {
      currentWeekStart,
      reminders,
      isPopUpOpen,
      reminderForm,
      isLoading,
      defaultColor,
      isError,
    } = this.state;
    return (
      <>
        {isPopUpOpen && (
          <CreateReminderForm
            handlePopUpOpen={this.handlePopUpOpen}
            reminderForm={reminderForm}
            handleSaveReminder={this.handleSaveReminder}
            handleDeleteReminder={this.handleDeleteReminder}
          />
        )}
        {isError && <ErrorMessage handleErrorClose={this.handleErrorClose} />}
        <NavigationBar
          currentWeekStart={currentWeekStart}
          handleCreate={this.handleCreate}
          setCurrentWeekStart={this.setCurrentWeekStart}
          defaultColor={defaultColor}
          handleColorUpdate={this.handleColorUpdate}
        />
        <WeekDaysNav currentWeekStart={currentWeekStart} />
        <div className="day-cells">
          {isLoading && <Loader />}
          <CallendarGrid
            currentWeekStart={currentWeekStart}
            reminders={reminders}
            handleOpenReminder={this.handleOpenReminder}
            handleCreate={this.handleCreate}
          />
        </div>
      </>
    );
  }
}

export default Calendar;
