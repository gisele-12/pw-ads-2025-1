/* 
    O metodo de vetores find() encontra o PRIMEIRO ELEMENTO que 
    corresponda ao retorno de uma função passada como paramêtro
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva','jabuticaba', 'maracujá']

// encontrando o primeiro numero negativo no vetor de numeros
console.log ('Primeiro numero negativo:', numeros.find(n => n < 0))

// encontrando o primeiro numero multiplo de 5
console.log('Primeiro numero multiplo de 5:', numeros.find(x => x % 5 === 0))

// encontrando o primeiro numero maior do que 20
console.log('Primeiro numero maior do que 20:', numeros.find(i => i > 20))

// encontrando a primeira fruta que começa com a letra "m"
console.log ('Primeira  fruta que começa com "m": ', frutas.find(f => f.charAt (0) === 'm'))

// encontrando a primeira fruta que termina com a letra "r"
console.log ('Primeira  fruta que termina com "r": ', frutas.find(f => f.slice (-1) === 'r'))

