function firstDayWeek(week, year) {
    let date = 1 + (week - 1) * 7;
    let monday = new Date(year, 0, date);
    
    while (monday.getDay() !== 1) {
        if (monday.getFullYear() === year - 1) return '01-01-' + year;
        monday.setDate(monday.getDate() - 1);
    }

    if (year.toString().slice(0, 2) === '00') monday.setDate(monday.getDate() + 1);

    const padZero = (num) => (num < 10 ? '0' + num : num);
    return `${padZero(monday.getDate())}-${padZero(monday.getMonth() + 1)}-${year.toString().slice(0, 2) === '00' ? '00' + monday.getFullYear().toString().slice(-2) : monday.getFullYear()}`;
}