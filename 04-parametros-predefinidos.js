/*
calcArea() é uma função que calcula  a aea de uma figura
geometrica plana, dados a base, a altura e o tipo de figura
*/

// tipo é um PARAMETRO PREDEFINIDO, cuj valor default é `R`.
// Se a funcao for chamada omitindo o terceiro parametro, ele 
// assumirá o valor default `R`
function calcArea(base, altura, tipo = `R`) {
    switch(tipo) {
        case `R`: // retangulo
            return base *altura
        case `T`: // triangulo
            return base *altura / 2
        case `E`: // elipse/circulo
            return (base/2) * (altura / 2) * Math.PI
        default: // forma invalida/desconhecida
            return undefined        
    }
}

console.log(`Area triangulo 10x30: ${calcArea(10,30, `T`)}`)
console.log(`Area elipse (Circulo) 7,5x7,5: ${calcArea(7.5, 7.5, `E`)}`)
console.log(`Area retangulo 15x8:  ${calcArea(15,8, `R`)}`)
console.log(`Area forma invalida 12x18: ${calcArea(12,18, `H`)}`)

// chamada a funcao usando apenas dois parametros
// como o terceiro parametro é predefinido com o valor `R`, a funcao 
// entenderá que deve fazer o calculo de area para um retangulo
console.log(`Area retangulo 7x16: ${calcArea(7, 16)}`)

/* 
REGRAS PARA O USO DE PARAMETROS PREDEFINIDOS
1) O parametro predefinido deve vir sempre POR ULTIMO na lista d parametros
2) Pode haver mais de um parametro predefinido, mas eles devem ser sempre OS ULTIMOS na lista de parametros.
*/