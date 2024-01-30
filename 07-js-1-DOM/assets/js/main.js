const div = document.createElement('div');
div.classList = 'container';
const btnsuccess = document.createElement('button');
btnsuccess.prepend('Open');
btnsuccess.setAttribute('type','button');
btnsuccess.className = 'open';
btnsuccess.setAttribute('onclick','windowOpening()');

const modWin = document.createElement('div');
modWin.classList = 'modalWindow';
const p = document.createElement('p');
p.prepend('Welcome to the modal window');
const btnCloses = document.createElement('button');
btnCloses.setAttribute('type','button');
btnCloses.className = 'close';
btnCloses.prepend('Close')
btnCloses.setAttribute('onclick','windowCloses()');

function windowOpening() {
    modWin.style.display = 'block';
    document.body.classList = 'page-overlay';
    btnsuccess.style.opacity = '0';
}

function windowCloses() {
    modWin.style.display = 'none';
    document.body.classList.remove('page-overlay')
    btnsuccess.style.opacity = '1';
}

div.prepend(btnsuccess)
div.append(modWin)
modWin.append(p)
modWin.append(btnCloses)
document.body.prepend(div)