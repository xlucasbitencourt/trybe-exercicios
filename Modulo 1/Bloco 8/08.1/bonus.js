const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = {
    mage,
    warrior,
    dragon
};

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const danoDragao = () => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;

// console.log(danoDragao());

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const danoWarrior = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength;

// console.log(danoWarrior());

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const turnoMago = () => {
    if (mage.mana < 15) {
        return 'Não possui mana suficiente';
    }
    return {
        dano: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) ) + mage.intelligence,
        mana: 15,
    }
}

// console.log(turnoMago());
const turnoWarrior = (dano) => {
    warrior.damage = dano;
    dragon.healthPoints -= dano;
}

const turnoMage = (dano) => {
    mage.damage = dano.dano;
    mage.mana -= dano.mana;
    dragon.healthPoints -= dano.dano;
}

const turnoDragon = (dano) => {
    dragon.damage = dano;
    warrior.healthPoints -= dano;
    mage.healthPoints -= dano;
}

const gameActions = {
    // Crie as HOFs neste objeto.
    turnoWarrior: turnoWarrior(danoWarrior()),
    turnoMage: turnoMage(turnoMago()),
    turnoDragon: turnoDragon(danoDragao()),
    resultado: () => battleMembers,
  };

console.log(gameActions.resultado());

// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

