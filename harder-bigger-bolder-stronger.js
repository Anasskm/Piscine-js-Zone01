const generateLetters = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 1; i <= 120; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)]
        const div = document.createElement('div')
        div.textContent = char
        div.style.fontSize = `${i + 10}px`
        div.style.fontWeight = i > 40 ? i > 80 ? '600' : '400' : '300'
        document.body.append(div)
    }
}
export{generateLetters}