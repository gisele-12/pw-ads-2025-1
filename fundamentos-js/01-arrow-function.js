/* Função tradicional com 1 paramero e 1 linha de corpo */
function quadrado (n) {
    return n * n
}

console.log('[TRADI] O quadrado de 7 é ',quadrado(7))

/* Função equivalente usando a sintaxe arrow function
    ~> não necessita de chaves
    ~> nao necessita de parenteses em torno do parametro
    ~> nao necessita da palavra-chave "return"
    ~> a palavra chave "function" é substituido pela flecha =>
        LOGO APOS o parametro
    ~> a arrow function é invocado pelo nome da constante que a recebe
*/
const quadradoA = n => n * n

console.log ('[ARROW] O quadrado de 7 é', quadradoA(7))



/*
    Função tradicional com mais de um parametro e apenas
    uma linha de corpo com return
*/
function calc(a, b, c) {
    return a * b + c
}
console.log ('[TRADI] O resultado do calculo é', calc(10, 20, 30))

/* 
    Equivalente na sintaxe arrow function
    ~> quando o numero de parametro é diferente de 1, os parenteses 
    voltam a ser obrigatorios
*/
const calcA = (a, b, c) => a * b + c
console.log('[ARROW] O resultado do calculo é', calcA(10, 20, 30))

/* 
    Função tradicional sem parametros, com uma linha de corpo    
*/
function msgERRO() {
    return 'ERRO FATAL!!!'
}
console.log('[TRADI] Mensagem de erro:', msgERRO())

/* 
    Equivalente na sintaxe arrow function
    ~> parenteses vazios devem ser usados para macacr o lugar do parametro
*/
const msgErroA = () => 'ERRO FATAL!!!'
console.log ('[ARROW] Mensagem de erro:', msgErroA())

/* 
 Função tradicional com um paramtro e varias linhas de corpo
*/
function fatorial(n) {
    let resultado = 1
    for (let i = n; i > 1; i--) resultado *=1
    return resultado
}
console.log('[TRADI] O fatorial de 8 é', fatorial(8))


/* 
Equivalente na sintaxe arrow function
~> não há economia de linhas no corpo da funcao
~> as chaves voltam a ser obrigagtorias
*/
const fatorialA = n => {
    let resultado = 1
    for (let i = n; i > 1; i--) resultado *= i
    return resultado
}
console.log('[ARROW] O fatorial de 8', fatorialA(8))




