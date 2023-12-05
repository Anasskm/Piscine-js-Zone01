const dayOfTheYear = date => [31, isLeapYear(date) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].slice(0, date.getUTCMonth()).reduce((sum, days) => sum + days, 0) + date.getUTCDate();

const isLeapYear = date => new Date(date.getFullYear(), 1, 29).getDate() === 29;
