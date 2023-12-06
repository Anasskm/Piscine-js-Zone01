function citiesOnly(arr) {
    const out = arr.map((obj) => obj["city"])
    return out
}


function upperCasingStates(arr) {
    const out = arr.map((str) => {
        let a = str.split(' ')
        const mgad = a.map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase())
        return mgad.join(' ')


    }

    )
    return out
}
function fahrenheitToCelsius(far) {
    const out = far.map((elem) => {
        let c = (5 / 9) * (parseFloat(elem) - 32)
        return Math.round(c)+ '°C'
    }
    )
    return out
}
function trimTemp(arr) {
    const out = arr.map(obj => ({
        ...obj,
        temperature: obj.temperature.replace(/\s/g, '')
    }))
    return out
}
function tempForecasts(arr) {
    const out = arr.map((obj) => String(Math.round((5 / 9) * (parseFloat(obj.temperature) - 32)) + "°Celsius") + ' in ' + obj.city + ', ' + obj.state.charAt(0).toUpperCase() + obj.state.slice(1).toLowerCase())
    return out
}