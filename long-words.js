const longWords = arr => arr.every(elem => typeof elem === "string" && elem.length>=5)



const oneLongWord = arr => arr.some(elem => typeof elem === "string" && elem.length>=10)



const noLongWords = arr => arr.every(elem => !(typeof elem === "string" && elem.length>=7))