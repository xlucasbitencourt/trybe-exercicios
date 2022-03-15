let pizza1 = '4 queijos';
let pizza2 = 'Frango';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate';

console.log(pizza1, pizza2, pizza3, pizza4, pizza5);

let pizzas = ['4 queijos', 'Frango', 'Marguerita', 'Palmito', 'Chocolate'];

pizzas.push('Peito de peru'); //adiciona novo sabor ao final da lista
console.log('Sabores: '+ pizzas); // usar + para sair dos [] na exibição

console.log(pizzas.length); //tamanho do array

console.log(pizzas.sort());