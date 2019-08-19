const background = document.querySelector('#background');
const fontColor = document.querySelector('#font-color');
const fontSize = document.querySelector('#font-size');
const fontFamily = document.querySelector('#font-family');

background.onchange = () => backgroundSelectColor(background.value);
fontColor.onchange = () => fontSelectColor(fontColor.value);
fontSize.onclick = () => {
    const size = prompt('Enter the size:');
    document.body.style.fontSize = size;
}
fontFamily.onclick = () => {
    const family = prompt('Enter the family (arial, times, sans)')
    document.body.style.fontFamily = family;
}

// CSS Functions

const backgroundSelectColor = (color) => {
    document.body.style.backgroundColor = color;
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
    if(color == 'hex') {
        const hex = prompt('Enter here the hex value (#32a852)');
        document.body.style.color = hex;
    }
    if(color == 'other') {
        const other = prompt('Type the color');
        document.body.style.color = other;
    }
}

// TODO: rgb values
// TODO: create a html element, select it and customize it
// TODO: image background