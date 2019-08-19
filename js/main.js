const background = document.querySelector('#background');
const fontColor = document.querySelector('#font-color');
const fontSize = document.querySelector('#font-size');
const fontFamily = document.querySelector('#font-family');
const createElement = document.querySelector('#btnCreateElement');
const elements = document.querySelector('#elements');

background.onchange = () => backgroundSelectColor(background.value);
fontColor.onchange = () => fontSelectColor(fontColor.value);
fontSize.onclick = () => {
    const size = prompt('Enter the size (25px, 3em)');
    document.body.style.fontSize = size;
}
fontFamily.onclick = () => {
    const family = prompt('Enter the family (arial, times, sans)');
    document.body.style.fontFamily = family;
}
createElement.onclick = () => {
    const element = prompt('Type here the element (h1, h2, p)');
    const elementText = prompt('Type here some text');
    const node = document.createElement(element);
    const nodeText = document.createTextNode(elementText);
    node.appendChild(nodeText);
    node.classList.add('created-Element');
    elements.appendChild(node);
}

// CSS Functions

const backgroundSelectColor = (color) => {
    document.body.style.backgroundColor = color;
    if(color == 'rgb') {
        const rgb = prompt('Enter here the rgb value (255, 0, 0)');
        document.body.style.backgroundColor = `rgb(${rgb})`;
    }
    if(color == 'hex') {
        const hex = prompt('Enter here the hex value (#32a852)');
        document.body.style.backgroundColor = hex;
    }
    if(color == 'other') {
        const other = prompt('Type the color');
        document.body.style.backgroundColor = other;
    }
}

const fontSelectColor = (color) => {
    document.body.style.color = color;
    if(color == 'rgb') {
        const rgb = prompt('Enter here the rgb value (255, 0, 0)');
        document.body.style.backgroundColor = `rgb(${rgb})`;
    }
    if(color == 'hex') {
        const hex = prompt('Enter here the hex value (#32a852)');
        document.body.style.color = hex;
    }
    if(color == 'other') {
        const other = prompt('Type the color');
        document.body.style.color = other;
    }
}

// TODO: create a html element, select it and customize it
// TODO: image background