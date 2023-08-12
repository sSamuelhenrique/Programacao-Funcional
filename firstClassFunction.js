const sayMyName =  () => console.log('samuel'); /* a função sayMyName foi guarada em uma constante */
     /* função que recebe um parametro tem que ser uma função, quando recebido essa função é executada */

runFunction(sayMyName); //execução da funcao runFunction recebendo como argumento a variavel sayMyName que contem uma função
runFunction(() => console.log("teste")); //argumento é uma arrow funcition

console.log(runFunction(Math.random))
