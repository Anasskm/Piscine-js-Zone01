const isFriday = (date) => date.getDay() === 5;

const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 0;

const isLeapYear = (date) => new Date(date.getFullYear(), 1, 29).getDate() === 29;

const isLastDayOfMonth = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const longerDays = [0, 2, 4, 6, 7, 9, 11];
    const shorterDays = [3, 5, 8, 10];
    
    return (longerDays.includes(month) && day === 31) ||
           (shorterDays.includes(month) && day === 30) ||
           (month === 1 && (isLeapYear(date) ? day === 29 : day === 28));
};