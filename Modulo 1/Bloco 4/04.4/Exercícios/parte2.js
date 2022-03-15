//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

//outra forma de fazer 
function verificaPalindrome2(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome2('desenvolvimento')); 
console.log('-------------------------------------------------------');

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];
function maiorValor (inteiros) {
    let maior = inteiros[0];
    let indice = maior;
    for (let key in inteiros) {
            if (inteiros[key] > maior) {
                maior = inteiros[key];
                indice = key;
            }
    }
    return indice;
}

console.log('Maior valor: ' + maiorValor(array));
console.log('-------------------------------------------------------');

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let valoresMenor = [2, 4, 6, 7, 10, 0, -3];
function menorValor (inteiros) {
    let menor = inteiros[0];
    let indice = menor;
    for (let key in inteiros) {
            if (inteiros[key] < menor) {
                maior = inteiros[key];
                indice = key;
            }
    }
    return indice;
}
console.log('Menor valor: ' + menorValor(valoresMenor));
console.log('-------------------------------------------------------');

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let array4 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorCaracteres (palavras) {
    let maior = palavras[0];
    for (let key in palavras) {
        if (palavras[key].length > maior.length) { // Lembrar de usar length para contar caracteres
            maior = palavras[key];
        }
    }
    return(maior);
}
console.log(maiorCaracteres(array4));
console.log('-------------------------------------------------------');

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array5 = [2, 3, 2, 5, 8, 2, 3];
function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido(array5));
console.log('-------------------------------------------------------');

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

let num = 15;
let soma = 0;
function somatorio (valor) {
    for (let cont = 1; cont <= valor; cont ++) {
        soma += cont;
    }
    return(soma);
}
console.log(somatorio(num));
console.log('-------------------------------------------------------');

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaFimPalavra('trybe', 'be'));