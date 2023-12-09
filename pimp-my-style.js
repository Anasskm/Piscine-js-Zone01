import { styles } from './pimp-my-style.data.js'

const style = styles
var count = 0
var reverse = styles.length - 1
const pimp = () => {
    let bu = document.getElementsByTagName("button")
    Array.from(bu[0].classList).includes('unpimp') ? (() => {
        reverse === -1 ? (() => {
            bu[0].classList.remove('unpimp')
            reverse = styles.length - 1
        })() : (() => {
            bu[0].classList.remove(style[reverse])
            reverse--
        })()
    })() : (() => {
        count === style.length ? (() => {
            bu[0].classList.add('unpimp')
            count = 0
        })() : (() => {
            bu[0].classList.add(style[count])
            count++
        })()


    })()
}

export { pimp }