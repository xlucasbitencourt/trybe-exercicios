//pedidos de pizzas
let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
    bordaCatupiry: true
};

for (let key in pizzas) { //enquanto estver dentro de pizzas
    console.log(key);
    console.log(pizzas[key]);
    //console.log(pizzas['bordaCatupiry']); mesma coisa que acima
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key);
    //console.log(pizzasDoces);
    console.log(pizzasDoces[key]);
}