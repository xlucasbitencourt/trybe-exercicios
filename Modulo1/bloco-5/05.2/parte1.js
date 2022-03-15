// arquivo script.js

//console.log(document.getElementById('start').nextSibling) // nó

//console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>


//Acesse o elemento elementoOndeVoceEsta .

console.log(document.getElementById('elementoOndeVoceEsta'));
let ondeEsta = (document.getElementById('elementoOndeVoceEsta'));

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let paiOndeEsta = (document.getElementById('elementoOndeVoceEsta').parentNode);
paiOndeEsta.style.color = 'blue';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

document.getElementById('primeiroFilhoDoFilho').innerText = 'Isso aqui é um texto!';

//Acesse o primeiroFilho a partir de pai .

console.log(paiOndeEsta.firstElementChild);

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

console.log(ondeEsta.parentNode.firstElementChild);

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

console.log(ondeEsta.nextSibling);

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

console.log(ondeEsta.nextElementSibling);

//Agora acesse o terceiroFilho a partir de pai .

console.log(paiOndeEsta.firstElementChild.nextElementSibling.nextElementSibling);
