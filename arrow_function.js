



function apresentar(nome){
    return "meu nome é " + nome;
}


console.log(apresentar('Vagner'));

const apresentaArrow = nomeA =>`meu nome é ${nomeA}`;

console.log(apresentaArrow('Vagner Simonetti'));

//1 condição
const soma = (number1, number2) => number1 + number2;

console.log(soma(2, 2));

// mais de uma condição

const comparaNumber = (numberA, numberB) => {
    if (numberA < 10 && numberB < 10){
        return numberA + numberB;
     } else{
        return "Numeros grandes";
    }
 
}
console.log(comparaNumber(9, 4));