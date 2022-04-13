const personA = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
};

const { nationality = 'Brazilian'} = personA;

console.log(nationality);

// -----------------------------------------------------

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));