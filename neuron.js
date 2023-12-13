function neuron(arr) {
    const res = {};

    const addEntry = (key, statement, response) => {
        const baseKey = statement.replaceAll(' ', '_').replace(/[?!]/, '').toLowerCase();
        res[key] ||= {};
        res[key][baseKey] ||= { [key.slice(0, -1)]: statement, responses: [] };
        res[key][baseKey].responses.push(response);
    };

    for (const item of arr) {
        const [type, ...rest] = item.split(' ');
        const [statement, response] = parseItem(rest);

        if (/questions:/i.test(type)) {
            addEntry('questions', statement, response);
        } else if (/orders:/i.test(type)) {
            addEntry('orders', statement, response);
        } else if (/affirmations:/i.test(type)) {
            addEntry('affirmations', statement, response);
        }
    }

    return res;
}

function parseItem(arr) {
    const fullText = arr.join(' ');
    const [statementPart, responsePart] = fullText.split(' - ');
    const statement = statementPart.trim();
    const response = responsePart.trim().split(' ').slice(1).join(' ');

    return [statement, response];
}
