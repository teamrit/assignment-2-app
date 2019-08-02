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

export const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
};

export function stringifyRequest(obj) {
    let str = "";
    for (let key in obj) {
        if (str !== "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
}

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

export const highlightNavigationItem = (href,page) => {
    const part = (page.split("/"))[1];
    console.log(part,page);
    return `/${part}` === href || `/${part}s` === href;
};