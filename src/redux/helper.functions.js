export const resolveHost = (url) => {
    return `http://localhost:8000${url}`;
};

export const getDayName = date => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    if (dayName) {
        return dayName.substring(0,3);
    }
};

export const getMonthName = date => {
    const month = date.toLocaleString('default', { month: 'long' });
    return month
};

/**
 *
 * @param dateString - Date String is the string representation coming from the backend
 */
export const beautifyDate = dateString => {
    if (dateString) {
        const date = new Date(dateString);
        return `${getDayName(date)}, ${date.getDate()} ${getMonthName(date)}, ${date.getFullYear()}`;
    }
    return ""
};