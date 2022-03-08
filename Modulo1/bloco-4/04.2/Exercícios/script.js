let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

soma = 0;
for (index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = soma / numbers.length;
console.log(media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor ou igual a 20');
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = numbers[0];
for (index = 1; index < numbers.length; index++) {
if (maior<numbers[index]) {
    maior = numbers[index];
}
}
console.log('maior: ' + maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0;
for (index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 1) {
        impar ++;
    }
}
if (impar === 0) {
    console.log('nenhum valor ímpar encontrado');
}
else {
    console.log('ímpares: ' + impar);
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];
for (index = 1; index < numbers.length; index++) {
if (menor>numbers[index]) {
    menor = numbers[index];
}
}
console.log('menor: ' + menor);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let lista = [];
for (index = 0; index <25; index++) {
    lista [index] = index+1;
}
console.log(lista);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

for (index = 0; index <lista.length; index++) {
    console.log(lista[index] / 2);
}