/* `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:

o que é for? È uma palavra reservada, a qual significa PARA é uma estrutura de repetição com viariavel. Determina uma ação é mais utilizado quanod se sabe o número de iterações da repetição.

o que é Break? É uma palavra reservada, é utilizada para pular de um loop ou de uma switch é usdapara pular qualquer bloco de código.

o que é Continue? É uma palavra reservada, é um comando de instrução o qual interrompe uma iteração no laço de repetição se uma condição especifica ocorrer e continua com a proxima iteração no laço de repetição.
*/
//====================================================

/*a) números de 1 a 50
for(let number = 1; number <= 50; number++) {
    console.log(`Imprima na Tela os seguintes números ${number}`)
}
*/

/* b) quando chegar no número 25 interrompa a instrução e pare o loop - USAR O BREAK
    
for(let number = 1; number > 0; number = number + 1) {
    console.log(number)

    if(number === 25){
        break
    }
}
console.log("Fim retornou o número solicitado")
*/


//c) quando chegar no número 10 pule a instrução
let counter = 10

while(counter < 50) {
    counter += 1

    if(counter === 10){
    console.log('CONTINUE')
    continue
    }
    console.log('Conferindo o método CONTINUE' + counter)
}
