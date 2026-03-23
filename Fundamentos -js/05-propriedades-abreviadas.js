// Alguns dados de um usuário
const fullname = 'Jonicleisson Junqueira Júnior'
const username = 'junin'
const group =  'alunos'

// Criando um objeto a partir das variáveis acima
const user1 = {
    fullname: fullname,
    username: username,
    group: group
}
console.log(user1)

/* Quando o nome da propriendade de um objeto é idêntico à variável que lhe dará o valor,
é possivel usar a sintaxe chamada PROPRIEDADE ABREVIADA. Ela permite não repetir os nomes das variáveis á frente
dos nomes das propriedades
*/

const user2 = {
    fullname,
    username,
    group
}
console.log(user2)

// um objeto pode mesclar propriedades abreviadas e
// não abreviadas
const user3 = {
    fullname,
    username,
    password: 'AlvinegroPraiano',
    group,
    lastLogin: '2026-03-02 11:27:35'
}
console.log(user3)

/* USANDO PROPRIEDADES ABREVIADAS PARA DEPURAÇÃO (DEBUG) */

const x = 10, y = 'batata'

/*
    Exibindo o valor das duas variáveis com console.log().
    Observe que os valores são mostrados, mas a saída não
    informa quais as variáveis de onde provêm os valores
*/
console.log(x, y)
/*
    Saída melhorada: Passando um objeto formado pelas variáveis
    como propriedades abreviadas para o console.log(), conseguimos
    indentificar de onde vêm os valores
*/
console.log({x, y}) 