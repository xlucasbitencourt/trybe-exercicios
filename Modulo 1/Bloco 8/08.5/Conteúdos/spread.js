// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Macã', 'Abacaxi', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Leite condensado', 'Mel'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];
  // Esreva sua função aqui

console.log(fruitSalad(specialFruit, additionalItens));