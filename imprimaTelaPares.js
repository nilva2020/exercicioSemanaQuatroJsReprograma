/* `Pares` |Imprima na tela os números pares existentes entre 0 e 100

o método push irá adicionar valores pares na lista vazia
*/

function exibePar(n1,n2){
    let lista = []  
        while(n1<=n2){
            if(n1%2==0){
            lista.push(n1)
            }
        n1++    
        }
    return lista
    }

   console.log(exibePar(0,100))