const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

//mesclando strings com variaveis usando concatenção
console.log('Meu nome é ' + nome + ' , tenho ' + idade + ' anos e moro em ' + cidade + '.')

//Mesclando strings e variaveis com template string
//Tempaltes strings são OBRIGATORIAMENTE delimitadas por ' ' 
// (acentos graves/backticks)
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)

//Dentro de uma template string, nao estamos limitados a usar apenas 
// variaveis dentro do simbolo ${}. Qualquer codigo JS valido 
// pode ser empregado ali
console.log(`DAQUI A 7 ANOS, ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS.`)


