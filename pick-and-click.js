export function pick() {
    const createDiv = (className, text) => {
        const div = document.createElement('div');
        div.className = `text ${className}`;
        div.style.position = 'absolute';
        div.appendChild(document.createTextNode(text));
        document.body.insertBefore(div, document.getElementById("div1"));
        return div;
    };

    const hslDiv = createDiv('hsl', 'hsl(0, 50%, 0%)');
    const hueDiv = createDiv('hue', 'hue 0');
    const lumDiv = createDiv('luminosity', 'luminosity 0');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttributeNS(null, 'height', window.innerHeight);
    svg.setAttributeNS(null, 'width', window.innerWidth);

    const createLine = (id, x1, x2, y1, y2) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttributeNS(null, 'id', id);
        line.setAttributeNS(null, 'x1', x1);
        line.setAttributeNS(null, 'x2', x2);
        line.setAttributeNS(null, 'y1', y1);
        line.setAttributeNS(null, 'y2', y2);
        line.style.stroke = 'white';
        line.style.strokeWidth = '1';
        return line;
    };

    const axisX = createLine('axisY', 0, 0, 0, 0);
    const axisY = createLine('axisX', 0, 0, 0, 0);

    svg.append(axisX, axisY);
    document.body.append(svg);

    document.addEventListener('mousemove', event => {
        const { clientX: x, clientY: y } = event;
        const hueVal = (x / window.innerWidth) * 360;
        const lumVal = (y / window.innerHeight) * 100;

        hueDiv.textContent = `hue \n ${Math.round(hueVal)}`;
        lumDiv.textContent = `luminosity \n ${Math.round(lumVal)}`;
        hslDiv.textContent = `hsl(${Math.round(hueVal)}, 50%, ${Math.round(lumVal)}%)`;

        document.body.style.background = `hsl(${Math.round(hueVal)}, 50%, ${Math.round(lumVal)}%)`;

        axisX.setAttributeNS(null, 'x1', 0);
        axisX.setAttributeNS(null, 'x2', window.innerWidth);
        axisX.setAttributeNS(null, 'y1', y);
        axisX.setAttributeNS(null, 'y2', y);

        axisY.setAttributeNS(null, 'y1', 0);
        axisY.setAttributeNS(null, 'y2', window.innerHeight);
        axisY.setAttributeNS(null, 'x1', x);
        axisY.setAttributeNS(null, 'x2', x);
    });

    document.addEventListener('click', () => {
        const copyValue = document.querySelector('.hsl').innerHTML;
        navigator.clipboard.writeText(copyValue);
    });
}
