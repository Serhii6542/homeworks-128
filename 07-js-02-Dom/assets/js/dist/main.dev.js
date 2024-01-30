"use strict";

var div = document.createElement('div');
div.classList = 'container';
var trafficLight = document.createElement('div');
trafficLight.classList = 'traffic-light';
var red = document.createElement('div');
red.className = 'light ';
var yellow = document.createElement('div');
yellow.className = 'light ';
var green = document.createElement('div');
green.className = 'light ';
var btn = document.createElement('button');
btn.classList = 'color-switching';
btn.setAttribute('type', 'button');
btn.setAttribute('onclick', 'lightSwitching()');
btn.prepend('Switching');
div.append(trafficLight);
div.append(btn);
trafficLight.append(red);
trafficLight.append(yellow);
trafficLight.append(green);
document.body.prepend(div);
var currentColorIndex = 0;
var colors = ['red', 'yellow', 'green'];
trafficLight.children[currentColorIndex].classList.add(colors[currentColorIndex]);

function lightSwitching() {
  trafficLight.children[currentColorIndex].classList.remove(colors[currentColorIndex]);
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  trafficLight.children[currentColorIndex].classList.add(colors[currentColorIndex]);
}