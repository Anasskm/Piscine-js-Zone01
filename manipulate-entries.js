const filterEntries = (obj, func) => Object.fromEntries(Object.entries(obj).filter(func));

const mapEntries = (obj, func) => Object.fromEntries(Object.entries(obj).map(entry => [func(entry)[0], func(entry)[1]]));

const reduceEntries = (obj, func, start) => start === undefined ? Object.entries(obj).reduce((acc, [key, value]) => func(acc, [key, value])) : Object.keys(obj).reduce((acc, key) => func(acc, [key, obj[key]]), start);

const totalCalories = (obj) => +(reduceEntries(obj, (prev, [key, value]) => prev + (nutritionDB[key].calories / 100) * value, 0).toFixed(1));

const lowCarbs = (obj) => filterEntries(obj, ([key, value]) => (nutritionDB[key].carbs / 100) * value < 50);

const cartTotal = (obj) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, Object.fromEntries(Object.keys(nutritionDB[key]).map(prop => [prop, +(((nutritionDB[key][prop] / 100) * value).toFixed(3))]))]));
