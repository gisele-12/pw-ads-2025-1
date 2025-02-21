/*
Desestruturação é a operacao pela qual se faz possivel extrair 
valores de vetores e objetos, atribuindo-os a variaveis avulsas 
*/

// 1) DESESTRUTURAÇÃO DE VETOR
const carros = [`Fusca`, `Chevete`, `Opala`]

//Desestruturacao
const [c1, c2, c3] = carros

/* 
Sem a desestuturação, seria necessario fazer
const c1 = carros[0]
const c2 = carros[1]
const c3 = carros[3]
*/

console.log({c1, c2, c3})

//Desestruturação parcial: 1º e 2º valores
const [x, y] = carros
console.log(`Primeiro e segundo carros:`, {x, y})

//Desestruturação parcial: 1º e 3º valores
const [a, ,b] = carros
console.log(`Primeiro e terceiro carros:`, {a, b})

//Desestruturação parcial: 2º e 3º valores
const [, j, k] = carros
console.log(`Segundo e terceiro carros:`, {j, k})

//PROBLEMA: TROCA DE VALORES DE VARIAVEIS ENTRE SI: SWAP

let v1 = 10, v2 = 20
console.log({v1,v2})

//modo classico de fazer swap (usando variavel auxiliar)
let temp = v1
v1 = v2
v2 = temp

//Usando desestruturacao para fazer swap (dispensa variavel
//auxiliar)
{[v1,v2] = [v2,v1]};


console.log(`Valores trocados:`, {v1, v2})