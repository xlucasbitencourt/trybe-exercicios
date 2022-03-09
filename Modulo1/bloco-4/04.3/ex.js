//fatorial

let numero = 10;
let fator = numero;

for (let index = numero; index >1; index--) {
    fator = fator*(index-1);
}

console.log(fator);

//inverter as letras

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// maior palavra e menor palavra


let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

//Número primo entre 0 e 50
let divisores = 0;
let primo = 0;
for (let num=0; num <50; num++){
    divisores = 0;
    for (let index = 1; index <=num; index ++){
        if (num % index === 0) {
            divisores ++;
        }
    }
    if(divisores === 2){
        primo ++;
    }
}

console.log(primo);

//método trybe

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

