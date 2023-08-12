/* função impura */
//Exemplo 1: está dependendo de dado externo (Math) que nao foi passado como parametro
function calculateCircumference(radius){
    return Math.PI * (radius + radius)
}
/* Math nao foi passado como parametro, entao é algo que está vindo do mundo exterior
logo se PI um dia for alterado (nesse caso especifico), irá impactar na funçao  */


/* ex 2: está alterando um dado externo */
let person = {
    name : "Samuel",
    age: 21, 
}

/* a função está alterando um  value do objeto person */
function changeName(name){
    person.name = name;
}

/* FUNÇÃO PURA */

//ex 1:
const calculateCircumference = function (pi, radius) {
        pi * (radius * radius);
}
/* ex 1 com arrow functio */
const calculateCircumference = (pi, radius) =>
    pi * (radius * radius);

//ex 2
const changePersonName = (person, name) =>
    ({...person, name : name});


let person1 = changePersonName(person, 'henrique');
/* aqui foi passado para person1 o resultado da funcao changePersonName, passando como paramentro o objeto person, assim devido ao espalhamento(...), person1 irá receber as 
propriedades do objeto person e por fim será passado um novo value para a key name */