function soma(numero1, numero2 ) {
    return numero1 + numero2;
}

function multiplica(number1 = 1, number2 = 1) {
    return number1 * number2;
}


console.log (multiplica(soma(3, 6)));

console.log (multiplica(soma(3, 6), soma(4, 5)));

console.log (multiplica(3, 3));


console.log(soma(2, 4));
//console.log(soma(7, 4));
//console.log(soma(20, 4));