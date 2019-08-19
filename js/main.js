const background = document.querySelector('#background');
const fontColor = document.querySelector('#font-color');
const fontSize = document.querySelector('#font-size');
const fontFamily = document.querySelector('#font-family');

background.onchange = () => colorChange(backgroundSelectColor, background.value);
fontColor.onchange = () => colorChange(fontSelectColor, fontColor.value);
fontSize.onclick = () => {
    const size = prompt('Enter the size:');
    document.body.style.fontSize = size;
}
fontFamily.onclick = () => {
    const family = prompt('Enter the family (arial, times, sans)')
    document.body.style.fontFamily = family;
}

// CSS Functions

const colorChange = (func, value) => {
    switch(value) {
        case 'white':
            func('white');
        break;

        case 'purple':
            func('purple');
        break;

        case 'yellow':
            func('yellow');
        break;

        case 'green':
            func('green');
        break;

        case 'black':
            func('black');
        break;
        
        case 'blue':
            func('blue');
        break;

        case 'other':
            func('other');
        break;

        case 'hex':
            func('hex');
        break;
    }
}

const backgroundSelectColor = (color) => {
    if(color == 'hex') {
        const hex = prompt('Enter here the hex value');
        document.body.style.backgroundColor = hex;
    }
    document.body.style.backgroundColor = color;
    if(color == 'other') {
        const other = prompt('Type the color');
        document.body.style.backgroundColor = other;
    }
}

const fontSelectColor = (color) => {
    if(color == 'hex') {
        const hex = prompt('Enter here the hex value');
        document.body.style.color = hex;
    }
    document.body.style.color = color;
    if(color == 'other') {
        const other = prompt('Type the color');
        document.body.style.color = other;
    }
}

// TODO: rgb values
// TODO: create a html element, select it and customize it
// TODO: image background