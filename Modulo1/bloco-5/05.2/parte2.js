//console.log('teste');
//Crie um irmão para elementoOndeVoceEsta .

const pai =  document.getElementById('pai');
const irmaoOndeEsta = document.createElement('section');
irmaoOndeEsta.id = 'irmaoOndeEsta';
pai.appendChild(irmaoOndeEsta);
irmaoOndeEsta.innerText = 'Irmão de Onde Você Está';

//Crie um filho para elementoOndeVoceEsta .

const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoOndeEsta = document.createElement('section');
filhoOndeEsta.id = "filhoOndeEsta";
ondeVoceEsta.appendChild(filhoOndeEsta);
filhoOndeEsta.innerText = 'Filho de Onde Você Está';

//Crie um filho para primeiroFilhoDoFilho .

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const neto = document.createElement('section');
neto.id = "neto";
primeiroFilhoDoFilho.appendChild(neto);
neto.innerText = "Neto";

//A partir desse filho criado, acesse terceiroFilho .

console.log(neto.parentNode.parentNode.nextElementSibling);
