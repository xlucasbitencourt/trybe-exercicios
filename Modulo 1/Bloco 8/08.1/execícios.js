//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const pessoa = (nome) => {
    const cadastro = {
        nomeCompleto: nome,
        email: nome.toLowerCase().split(' ').join('_') + `@trybe.com`, // formula pra tirar os espaços e substituir por _
    }
    return cadastro;
}

const newEmployees = (funcao) => {
    const employees = {
        id1: funcao('Lucas Bitencourt'),
        id2: funcao('John Doe'),
        id3: funcao('Ana Maria'),
    }
    return employees;
};

console.table(newEmployees(pessoa));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultado = (aposta, check) => {
    let sorteado = Math.floor(Math.random() * 5) + 1;
    console.log(sorteado); // para verificar se realmente está correto
    return check(aposta, sorteado) ? 'Parabéns você ganhou' : 'Tente novamente'

}

const sorteio = (numeroApostado, numeroSorteado) => numeroApostado === numeroSorteado;

console.log(resultado(4, sorteio));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const a = ['a', 'a', 'c'];
const b = ['a', 'b', 'c'];

const contagem = (gab, resp, check) => {
    let pontos = 0;
    for (let index in gab) {
        pontos += check(gab[index], resp[index]);
       // if (check(gab[index], resp[index])) {
         //   pontos += 1;
       // }
    }
    return(pontos);
}

const verifica = (certo, aluno) => {
    if (aluno === certo) {
        return 1;
    }
    if (aluno === 'N.A') {
        return 0;
    }
    return -0.5;
}

console.log(contagem(gabarito, respostas, verifica));
