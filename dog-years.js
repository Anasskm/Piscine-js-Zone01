const age = {
    earth: 31557600,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,

}
function dogYears(planet, dog) {
    if (planet == "earth") {
        let a = (dog / age.earth) * 7
        return a.toFixed(2)
    }
    let a = (dog / (age[planet] * age.earth)) * 7
    return a.toFixed(2)
}