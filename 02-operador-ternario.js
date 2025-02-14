let media = 7.4, resultado

if (media >= 6) {
    resultado = 'APROVADO'
}
else {
    resultado = 'REPROVADO'
}
console.log('Media:', media, ', situação:', resultado)

// usando o operador ternario
resultado = media >= 6 ? 'APROVADO' : 'REPROVADO'

console.log('Media:', media, ', situação:', resultado)

let user = 'guest', msg
/* 
    Quando ha apenas uma linha apos um if, um while, etc.
    podemos omitir as chaves
*/
if(user === 'adm') msg = 'Bem-vindo!'
else msg = 'Acesso negado'

console.log(user, msg)

//usando o operador ternario
msg = user === 'admin' ? 'Bem-vindo!': 'Acesso negado'

console.log(user, msg)
