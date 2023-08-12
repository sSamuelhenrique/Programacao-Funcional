const cart = {quantity: 2, total: 200,}
/* forma Errada */
cart.quantity = 3; 

/* Forma Correta */
/* for criado um novo objeto herdando as propriedade do objeto card, porem alterando o value de quantity */
const newCart = {...cart, quantity: 3};
/* (...) função de espalhar (spread) valores de um objeto ou array para um novo objeto ou array */

/* Exemplo em REactJS */
const [amout, setAmount] = useState(0);

/* forma errada */
amount = 2;

/* forma correta */
setAmount(2)

