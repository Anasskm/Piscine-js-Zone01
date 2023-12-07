const hasCity = (country, a) => function zebi(city) {
    return a.some(elem => elem === city) ? `${city} is a city from ${country}` : `${city} is not a city from ${country}`
}