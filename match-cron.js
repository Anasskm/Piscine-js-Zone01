function matchCron(cron, date) {
    const cronArr = cron.split(' ');

    return cronArr.every((value, i) =>
        value === '*' || (i === 3 ? (date.getMonth() + 1) === parseInt(value) : date[`get${['Minutes', 'Hours', 'Date', 'Month', 'Day'][i]}`]() === parseInt(value))
    );
}