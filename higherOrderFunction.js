const numbers = [2, 4, 8, 16]; 

const square = n => n * n;

const squareNumber = numbers.map(square); //a constante squareNumber irá receber do map um novo array vindo do array number, o map irá pegar cada item
//do array e irá executar a função square
/* square recebe como argumento o numero do primeiro indice do array numbers e o map adiciona esse valor no array squareNumber e assim vai ate completar todos os 
items */


//exemplo de um retorno de funçao
//(currying) ou aplicação parcial da funcao
const pause = wait => fn => setTimeout(wait, fn)

pause(600)(() => console.log('waiting 600ms'))
/* a função pause está recebendo como parametro 600 milisegundos, quando pause é executada ela executa outra função fn e é passado outra função 
como argumento para fn, assim quando setTimeout for executada depois de 600 milisegundos a função que está em fn será executada */

const wait200 = pause(200); //executando para rodar mais tarde
const wait1000 = pause(1000);

wait200(() => console.log('waiting 200ms'));
wait1000(() => console.log('waiting 1s'))