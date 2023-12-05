function sunnySunday(dd) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const daysDiff = Math.floor((dd - new Date(1, 0, 1)) / (24 * 60 * 60 * 1000));
    const currentDayIndex = (daysDiff % days.length + days.length) % days.length;
    return days[currentDayIndex];
}
