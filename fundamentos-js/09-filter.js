/* 
o metodo de vetores filter()0 cria um NOVO VETOR contendo apenas os
elementos que atendam ao criterio representado pela função passada 
como parametro
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva','jabuticaba', 'maracujá']

// criando um novo vetor apenas com os numeos negativos
 const negativos = numeros.filter (n => n < 0)
 console.log ('Apenas numero negativo:', negativos)

// criando um novo vetor apenas com os numeos pares
const pares = numeros.filter (i => i % 2 === 0)
console.log ('Apenas numero pares:', pares)

// criando um novo vetor apenas com os numeos maiores que 20
const maiores20 = numeros.filter (x => x > 20)
console.log ('Apenas numero < 20', maiores20)

// novo vetor apenas com fruta que começa com a letra "m"
const mInicial = frutas.filter(el => el.charAt(0) === 'm')
console.log ('Apenas frutas com inicial "m": ', mInicial)

// novo vetor apenas com fruta que terminam com a letra "i
const iFinal = frutas.filter(f => f.slice(-1) === 'i')
console.log ('Apenas frutas com final "i": ', iFinal)

// novo vetor apenas com fruta que terminam com a letra "r"
const rFinal = frutas.filter(x => x.slice(-1) === 'r')
console.log ('Apenas frutas com final "r": ', rFinal)



