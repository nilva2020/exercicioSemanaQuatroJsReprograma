/* Tabuada` | Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10

const fisrtTabuada = (...args)=>{
   
    for (let valor of args) {
        console.log(`${valor} / 5 = ${valor/5} `)
    } 
    return 'Resultado do Calculo'
}
console.log(fisrtTabuada(1,2,3,4,5,6,7,8,9,10))*/

function fisrtTabuada(a, b){
    for(let i = 1; i <= b; i++){
        console.log(a + 'x' + i + '=' + (a * i))
    }
}

console.log(fisrtTabuada(2,10))
console.log(fisrtTabuada(3,10))
console.log(fisrtTabuada(4,10))
console.log(fisrtTabuada(5,10))
console.log(fisrtTabuada(6,10))
console.log(fisrtTabuada(7,10))
console.log(fisrtTabuada(8,10))
console.log(fisrtTabuada(9,10))
console.log(fisrtTabuada(10,10))

