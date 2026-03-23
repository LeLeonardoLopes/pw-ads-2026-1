const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro Alto de cima/MG'

// Mesclando strings com variáveis usando a concatenação

const msg1 = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg1)

/* 
    Mesclando strings e variáveis usando template string
    Template strings são OBRIGATORIAMENTE delimitados por ``
    (backticks / acentos graves / "CRASES")
*/
const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

// Dentro de uma template string, não estamos limitados a usar
// apenas variáveis dentro do símbolo ${}. Qualquer código JS 
// valido pode ser empregado ali. 
console.log(`EM ${2026 + 7}, ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS.`)