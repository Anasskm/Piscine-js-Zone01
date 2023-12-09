import { colors } from './fifty-shades-of-cold.data.js'


const mycolors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']

const generateClasses = () => {
    const style = document.createElement('style')

    colors.forEach(color => {
        style.textContent += `
        .${color} {
            background: ${color};
        }
          `
    })

    document.head.appendChild(style)
}


const generateColdShades = () => {
    colors.forEach(color => {
        mycolors.forEach(mycolor => {
            if (color.includes(mycolor)) {
                const div = document.createElement('div')
                div.classList.add(color)
                div.textContent = color
                document.body.appendChild(div)
            }

        });

    });
}

const choseShade = (color) => {
    let divs = document.querySelectorAll('[class]')
    console.log(divs)
    divs.forEach(div => {
        div.classList.remove(div.classList[0])
        div.classList.add(color)

    });

}

export { choseShade, generateClasses, generateColdShades }