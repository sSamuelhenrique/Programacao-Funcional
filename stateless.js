const number = 2;
/* stateful function */
function square(){
    return number * number;
}
/* essa função lembra do estado da variavel number, assim se eu mudar o valor de number o resultado da funçao tambem mudara*/
number = square();

/* stateless function */
const square = n => n * n;
/* o resultado dessa função depende apenas do valor passado como argumento. ela nao se lembra de nenhum valor anterior  e nao é influenciada
estado externo */