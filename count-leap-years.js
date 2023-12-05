function countLeapYears(date) {
    return Array.from({ length: date.getFullYear() - 1 }, (_, year) => new Date(year + 1, 1, 29).getDate() === 29).filter(Boolean).length;
}
