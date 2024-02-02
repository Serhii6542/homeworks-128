"use strict";

var div = document.createElement('div');
div.classList = 'container';
var divWrap = document.createElement('div');
divWrap.classList = 'wrap';
divWrap.id = 'wrap';
divWrap.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus necessitatibus dolorum ratione sint aut illo.';
div.prepend(divWrap);
document.body.prepend(div);
var editing = false;
var text = '';
var resizi = false;
divWrap.addEventListener('mousedown', function (event) {
  resizi = true;
  document.addEventListener('mousemove', editResizi);
  document.addEventListener('mouseup', function () {
    resizi = false;
    document.removeEventListener('mousemove', editResizi);
  });
});

function editResizi(event) {
  if (resizi) {
    divWrap.style.width = event.clientX - divWrap.offsetLeft + 'px';
    divWrap.style.height = event.clientY - divWrap.offsetTop + 'px';
  }
}

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.code === 'KeyE') {
    event.preventDefault();

    if (!editing) {
      editing = true;
      text = document.getElementById('wrap').innerText;
      var textarea = document.createElement('textarea');
      textarea.id = 'textTeria';
      textarea.classList = 'textarea';
      textarea.value = text;
      document.getElementById('wrap').replaceWith(textarea);
      textarea.focus();
    }
  }
});
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.code === 'KeyS') {
    event.preventDefault();

    if (editing) {
      editing = false;
      text = document.getElementById('textTeria').value;
      divWrap.textContent = text;
      document.getElementById('textTeria').replaceWith(divWrap);
    }
  }
});