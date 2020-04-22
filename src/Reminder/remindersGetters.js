
export const getDuration = (finishTime, startTime) => {
    const getDate = (string) => new Date(0, 0, 0, string.split(':')[0], string.split(':')[1]);
    const different = (getDate(finishTime) - getDate(startTime));
    const hours = Math.floor((different % 86400000) / 3600000);
    const minutes = Math.round(((different % 86400000) % 3600000) / 60000);
    return hours * 60 + minutes;
}

export const getMinutesStart = (startTime) => startTime.split(':')[1];