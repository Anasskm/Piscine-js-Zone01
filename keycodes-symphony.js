document.addEventListener("keydown", compose)

function compose(event) {
    let divss = document.getElementsByTagName('div')
    if (!event) {
        return
    }
    const keyname = event.key
    if (keyname == 'Backspace') {
        console.log("zab")
        divss[divss.length - 1]?.remove()
    }
    if (keyname == 'Escape') {
        while (divss.length > 0) divss[0].remove()
    }

    if (/[a-z]/.test(keyname) && keyname.length === 1) {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
        ;
        const div = document.createElement('div')
        div.classList.add('note')
        div.textContent = keyname
        div.style.backgroundColor = color
        document.body.appendChild(div)
    }



}


export { compose }