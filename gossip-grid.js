import { gossips } from "./gossip-grid.data.js";

export function grid() {
    const createFormCard = () => {
        const formCard = document.createElement('form');
        formCard.className = 'gossip';
        document.body.appendChild(formCard);
        
        const textArea = document.createElement('textarea');
        formCard.appendChild(textArea);
        
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = "Share gossip!";
        formCard.appendChild(submitButton);
        
        submitButton.addEventListener('click', (e) => {
            const card = createGossipCard(document.querySelector('textarea').value);
            const submitBox = document.querySelectorAll('.gossip')[1];
            document.body.insertBefore(card, submitBox);
            e.preventDefault();
            document.querySelector('textarea').value = '';
        });

        return formCard;
    };

    const createGossipCard = (content) => {
        const card = document.createElement('div');
        card.className = 'gossip';
        card.appendChild(document.createTextNode(content));
        return card;
    };

    createFormCard();

    gossips.forEach((content) => {
        const card = createGossipCard(content);
        document.body.appendChild(card);
    });

    const createRangeInput = (id, min, max, value, labelText) => {
        const input = document.createElement('input');
        input.type = 'range';
        input.id = id;
        input.className = 'range';
        input.min = min;
        input.max = max;
        input.value = value;

        const label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerHTML = labelText;
        label.style.color = 'white';

        return [label, input];
    };

    const ranges = document.createElement('div');
    ranges.className = 'ranges';
    const [widLabel, rangeOne] = createRangeInput('width', '200', '800', '50%', 'Width');
    const [fsLabel, rangeTwo] = createRangeInput('fontSize', '20', '40', '50%', 'Font Size');
    const [bgLabel, rangeThree] = createRangeInput('background', '20', '75', '50', 'Background');

    ranges.append(widLabel, rangeOne, fsLabel, rangeTwo, bgLabel, rangeThree);
    document.body.append(ranges);

    const applyStyles = (property, value) => {
        const allBoxes = document.querySelectorAll('.gossip');
        allBoxes.forEach((div) => {
            div.style[property] = value;
        });
    };

    rangeOne.addEventListener('input', () => applyStyles('width', rangeOne.value + 'px'));
    rangeTwo.addEventListener('input', () => applyStyles('fontSize', rangeTwo.value + 'px'));
    rangeThree.addEventListener('input', () => applyStyles('background', `hsl(280, 50%, ${rangeThree.value}%)`));
}
