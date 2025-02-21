//Encontrando o maior e o menor numero em uma serie
let minimo = Math.min(2, -5, 8, 4, 0, 11, -1)
let maximo = Math.max(2, -5, 8, 4, 0, 11, -1)

console.log({minimo, maximo})

// E se os numeros estiverem em um vetor?
const nums = [2, -5, 8, 4, 0, 11, -1]

minimo = Math.min(nums) // NÃO FUNCIONA
maximo = Math.max(nums) // NÃO FUNCIONA

console.log ({minimo, maximo}) // NaN

/* 
A sintaxe de espalhamento (spreading), representada por
... antes do nome da variavel, é capaz de "desempacotar"
m vetor em uma serie de valores avulsos
*/
minimo = Math.min(...nums) 
maximo = Math.max(...nums)

console.log ({minimo, maximo})

// OUTROS USOS DA SINTAXE DE ESPALHAMENTO

const carro1 = {
    modelo: `Fiorino`,
    marca: `Fiat`,
    ano: 1984,
    cor: `bege`
}

//"Copiando" carro1 para carro 2
//const carro2 = carro1 // NAO FUNCIONA

//Forçando a copia de um objeto usando a sintaxe de espalhamento
const carro2 = {...carro1 }

//Mudando o valor das propriedades de carro2
carro2.modelo = `Fusca`
carro2.marca = `Volkswagen`
carro2.cor = `Preto`
carro2.ano = 1969

//Exibindo ambos os carro
console.log({carro1, carro2})

//PROBLEMA: JUNTAR DOIS OU MAIS VETORES EM UM NOVO VETOR

const frutas = [`maça`, `banana`, `laranja`, `uva` ]
const verduras = [`alface`, `couve`, `rucula`]

//Juntando os dois vetores usando JavaScript "classico" (anterior a 2015)
// const hortifruti = frutas.concat(verduras)

// Usando o espalhamento para unir vetores
const hortifruti = [...frutas, ...verduras]

console.log({hortifruti})

//PROBLEMA: declarar uma função que recebe um numero arbitrario de parametros


function soma(...nums) {
    //nums é recebido dentro da funcao como vetor 
    let resultado = 0
    for (let n of nums) resultado += n
    return resultado    
}

console.log(`Soma de 4 numeros:`, soma (1, 2, 3, 4))
console.log(`Soma de 7 numeros:`, soma ( 10, 20, 30, 40, 50, 60, 70))



