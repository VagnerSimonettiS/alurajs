var altura = 5;
var comprimento = 7;
//  var pode declarar onde quiser
var area = altura * comprimento;


console.log (area);
var area = altura * comprimento;


let alturaL = 5;
let comprimentoL = 7;
// let tem declarar antes
let areaL = alturaL * comprimentoL;
let forma = 'retangulo';

console.log (areaL);


if(forma != 'retangulo'){
    areaL = alturaL * comprimentoL;
}else {
    areaL = (alturaL * comprimentoL) / 2
}

console.log(areaL);

const formaC = 'quadrado';
const alturaC = 5;
const comprimentoC = 5;
let areaC; //se colocar const não funciona pois a const precisa de voalor

if (formaC === 'quadrado'){
    areaC = alturaC * comprimentoC;
}else {
    areaC = (alturaC * comprimentoC) / 2;

}

console.log (areaC);