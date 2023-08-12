const random = (number, Math) =>
	Math.floor(Math.random() * number);

/* é preciso passar o Math como argumento, pois caso nao seja passado será considerado algo do mundo externo que nao foi passado para ela */

const factorial = x => { /* foi passado pelo menos um argumento */
    if(x === 0){
        return 1;
    }
    return x * factorial(x - 1) /* aqui devido a condição do if, se o valor for diferente de 1, haverá a recursao, o retorno será a função sendo chamada
    novamente */
}
console.log(factorial(5));
/* 
    5 é igual a 0?
    nao,
    entao 5 * factorial(5 - 1);
    4 é igual a 0?
    nao, 
    entao 20 * factorial(4 - 1);
    3 é igual a 0?
    nao,
    entao 60 * factorial(3- 1);
    2 é igual a 0?
    nao, 
    entao 120 * factorial (2 - 1);
    1 é igual a 0?
    nao, 
    entao 120 * factorial (1 - 1);
    0 é igual a 0?
    sim, 
    *entao retorna 1*

*/