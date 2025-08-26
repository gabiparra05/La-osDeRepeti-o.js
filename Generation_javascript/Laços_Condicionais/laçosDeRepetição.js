
const leia=require('readline-sync');

let intervaloInicial=leia.questionInt("Digite o intervalo inicial: ")
let intervaloFinal=leia.questionInt("Digite o intevalo Final: ")


if(intervaloInicial < intervaloFinal){   
    for (let i = intervaloInicial; i <= intervaloFinal; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(i + "é divisivel po 3 e por 5")
        }
    }
} else{
    console.log("Intervalo Inválido")
}