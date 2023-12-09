import { styles } from './pimp-my-style.data.js'

const style = styles
var count = 0

const pimp = () => {
    let bu = document.getElementsByTagName("button")[0]
    !bu.classList.contains("unpimp") ? (() => {
        bu.classList.add(style[count])
        count++
    })() : (() => {
        count--
        bu.classList.remove(style[count])

        count === 0 && (bu.classList.toggle('unpimp'))
    })()
    count === styles.length && (bu.classList.toggle("unpimp"))
}

export { pimp }