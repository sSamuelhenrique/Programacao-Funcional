//funcao que eleva o numero ao quadrado

//imperativa: Faça da seguinte forma

/* let number = 8; //passo 1

function square() { //passo 2
    return number * number
}
number = square(); //passo 3
console.log(number) */

//foi dado um passo a passo de como deve ser feito: a variavel number é declarada e atribuída o valor 8, logo depois a função square que retorna o valor 
//quadrado de number, por fim a variavel global number recebe o valor da função square ao mesmo tempo executando a funçao


//declarativa: o que fazer e nao como fazer
const square = n => n * n;
console.log(square(8))
/* foi passada um arrow function que recebe um parametro e o retorno dessa função é o parametro ao quadrado (*NÃO ALTERA O VALOR DE NENHUM DADO FORA DO
    ESCOPO DA FUNÇAO) */