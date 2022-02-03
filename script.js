let element = document.querySelector('html');
let links = document.querySelector('ul');

function invertElements (){
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
    links.style.color = 'white';
}

element.onclick = invertElements;