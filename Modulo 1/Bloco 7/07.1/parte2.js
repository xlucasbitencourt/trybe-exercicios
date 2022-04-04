// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = numero => {
    if (numero === 0) {
        return 1;
    }
    
    let fator = numero;
    while (numero > 2) {
        fator *= --numero;
    }

    return(fator);
}

console.log(fatorial(5));


function findLongestWord(str) {
    return str.length;
  }

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = frase => {
    const palavras = frase.split(' '); // divide em cada palavra
    let maior = palavras.sort((a, b) => b.length - a.length); // variavel maior recebe a função que verifica o tamaho entre a e b

    return maior[0]; // retrona o primeiro valor, que pela ordem, é o maior
}

console.log(longestWord('a maca caiu do ceu Antônio foi no banheiro e não sabemos o que aconteceu'))

