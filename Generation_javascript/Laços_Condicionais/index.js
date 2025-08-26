// Laços Condicionais

// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C 
// e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia=require('readline-sync')

let A
let B
let C

A = leia.questionInt('digite o valor A: ')
B = leia.questionInt('digite o valor B: ')
C = leia.questionInt('digite o valor C: ')

let soma = A + B;

if(soma > C){
    console.log(" a soma foi MAIOR que C")
}
else if (soma < C){
    console.log(" a soma foi MENOR que C")
}
else if (soma == C){
    console.log(" o soma é IGUAL que C")
}
else{
    console.log("Neumero Invalido")
}