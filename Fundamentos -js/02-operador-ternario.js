let media = 7.6, situacao

if(media >= 6){
    situacao ='aprovado'
}
else {
    situacao = 'reprovado'
}

console.log('Situação do aluno com média', media , 'é', siutacao, '.')

//-----------------------------------------------------------------------//

let user ='guest', msg

/* 
    Decidindo se o usuário pode entrar ou não usando if...else

    Quando há apenas uma linha de código após um if, while, etc.,podemos omitir as chaves 
*/

if (user === 'admin') msg = 'Bem-vindo!'
else msg = 'Acesso negado'

console.log(user,msg)

// tomando a mesma decisão, mas usando o operador ternário 
msg = user === 'admin' ? 'Bem-vindo!' : 'Acesso negado.'
Console.log(user,msg)