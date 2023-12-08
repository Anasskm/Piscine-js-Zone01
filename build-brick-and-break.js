const build = (num) => {
    let count = 1
    let qlwa = 2
    const interval = setInterval(() => {
        const div = document.createElement('div')
        div.id = `brick-${count}`
        if (count === qlwa) {
            div.dataset.foundation = true
            qlwa = count + 3
        }
        count++
        document.body.appendChild(div)
        if (count > num) {
            clearInterval(interval)
        }
    }
        , 100)
}

const repair = (...ids) => {
    ids.forEach(id => {
        const zebi = document.getElementById(id)
        zebi.dataset.repaired = zebi.getAttribute("foundation")? "in progress" : true

    });

}


const destroy = () => {
    let a = document.getElementsByTagName('div')
    a[a.length - 1]?.remove()
}





export { build, repair, destroy }







