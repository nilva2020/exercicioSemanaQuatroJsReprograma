/* `10 em 10` | Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".|

=== Operador lógico (Valor e tipo igual) compara duas variaveis e retorna o tipo iguais e neste caso 
quando chegar a contagem nos numeros 60 e 90  ira imprimir o continue.
|| pipe duplo  operador lógico(OU) se X for igual a 60  OU X for igual a 90 imprima continue

*/
function dezEmDez(x){
 
  while(x < 100) {  

  x += 10
  
  if(x === 60 || x === 90) {
    console.log("CONTINUE")
    continue
  }

  console.log (x);

  }
}

console.log(dezEmDez(10))