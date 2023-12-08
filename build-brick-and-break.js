const build = (num) => {
    var count = 1
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div')
        div.id = `brick-${i + 1}`
        if (i === count) {
            div.setAttribute('foundation', 'true')
            count = count + 3
        }
        document.body.appendChild(div)
    }
}

const repair = (...ids) => {
    ids.forEach(id => {
        const zebi = document.getElementById(id)
        const att = zebi.getAttribute('foundation')
        if (att === "true") {
            zebi.setAttribute('repaired', 'in progress')
        } else {
            zebi.setAttribute('repaired', 'true')
        }
    });

}


const destroy = () => {
    let a = document.getElementsByTagName('div')
    a[a.length-1].remove()
}





export { build, repair,destroy }