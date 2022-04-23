/*Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6 |


função isInteger verifica se o numero dentro do parâmetro é inteiro
== vai comparar se o numero é inteiro e retornar verdadeiro
while verifica se o numero informado no num é maior que zero e continua a soma
*/


function myFatorial(num){
    let soma = 1
    if(Number.isInteger(num) == true) {
       while(num>0){
           soma = soma*num
           console.log(num)
           num--
       }
       return soma
    } else {
            console.log('O Parâmetro não é um número inteiro')
            return 0
    }
}

console.log(myFatorial(3))