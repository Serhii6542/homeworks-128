const div = document.createElement('div');
div.classList = 'container';
const trafficLight = document.createElement('div');
trafficLight.classList = 'traffic-light';
const red = document.createElement('div');
red.className = 'light ';
const yellow = document.createElement('div');
yellow.className = 'light ';
const green = document.createElement('div');
green.className = 'light ';
const btn = document.createElement('button');
btn.classList = 'color-switching';
btn.setAttribute('type', 'button');
btn.setAttribute('onclick', 'lightSwitching()');
btn.prepend('Switching');

div.append(trafficLight);
div.append(btn);
trafficLight.append(red);
trafficLight.append(yellow);
trafficLight.append(green);


document.body.prepend(div)

let currentColorIndex = 0;
const colors = ['red', 'yellow', 'green'];
trafficLight.children[currentColorIndex].classList.add(colors[currentColorIndex]);

function lightSwitching() {
    trafficLight.children[currentColorIndex].classList.remove(colors[currentColorIndex]);
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    trafficLight.children[currentColorIndex].classList.add(colors[currentColorIndex]);
}