//alguns dados de um usuario
const fullname = `Jonicleisson Junqueira Junior`
const username = `junin`
const group = `alunos`

/* CRIANDO UM OBJETO A PARTIR DAS VARIAVEIS ACIMA */
const user1 = {
    fullname: fullname, 
    username: username,
    group: group  
}
console.log(user1)

/* Quando o nome as propriedades é identico ao das vaiaveis
que lhes darão os valores, é possivel usar a sintaxe chamada 
PROPRIEDADES ABREVIADAS, pela qual não é necessario repetir 
os nomes das variveis a frente do nome das propriedades */
const user2 = {
    fullname,
    username,
    group
}
console.log(user2)

//Um objeto pode mesclar propriedades abreviadas e nao abreviadas
const user3 = {
    fullname,
    username,
    password: `TodoPoderosoTimao`,
    group,
    lastLogin: `2025-02-20 12:23:37`
}
console.log(user3)

/* DEPURAÇÃO USANDO PROPRIEDADES ABREVIADAS */

const x = 10, y = `batata`

/* Exibindo o valor das duas variaveis com console.log().
Observe que os valores sao mostrados, mas a saida nao 
informa de quais variaveis de onde provem os valores.
*/
console.log(x,y)

/* Saida melhorada: passando um objeto formado pelas variaveis 
como propriedades abreviadas para  o console.log(), conseguimos 
saber de onde vem os valores
*/
console.log({x,y})
