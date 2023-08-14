const people = ['Rafa', 'Diego', 'Dani', 'Rod'];

const upperCasePeopleThatStartsWithD = people.map(dperson => dperson.toUpperCase()).filter(person => person.startsWith('D')); //composição de funcao
//é criada uma constante que atraves do .map irá tornar uma array, mas para isso aconter a condição do .map tem que ser atendida, entao é criado uma
//arrow function onde dperon é o parametro dessa função e esse parametro irá receber como argumento cada item do array people e atraves da função 
//toUpperCase() irá transformar todos esses itens do array novo em letras maiusculas e por final a função .filter() irá filtrar cada item desse novo 
//de acordo com a condição passada como parametro e o argumento dessa função é outra função, que irá deixar nesse novo array apenas string que começam
//com D, person arrow function que recebe como argumento cada item desse novo array e retorna apenas as string que começam com D;
/* 
    const upperCasePeopleThatStartsWithd = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase());
*/ 