/*
    DESESTRUTURAÇÃO (destructuring) é a operação que torna possável extrair 
    valor individuais a partir de vetores e objetos, atribuindo-os a 
    variáveis avulsas.
*/

// 1) DESESTRUTURAÇÃO DE VETOR
const carros = ['Fusca' , 'Chevette', 'Opala']

// desestruturação
const [c1, c2, c3] = carros

/*
    Sem a desestruturação, seria necessário fazer:
    const c1 = carros[0]
    const c2 = carros[1]
    const c3 = carros[2]
*/

console.log({c1,c2,c3})

// Desestruturação parcial: 1° e 3° elementos
const [carro1, , carro3] = carros
console.log({carro1, carro3})

// Desestruturação parcial: 1° e 2° elementos
const [k1, k2] = carros
console.log({k1,k2})

// Desestruturação parcial: 2° e 3° elementos
const [, v2, v3] = carros
console.log({v2, v3})

// PROBLEMA: troca de valores de variáveis entre si (swap)
let var1 = 10, var2 = 20
console.log('Antes:', {var1, var2})

// modo clássico de fazer swap (usando uma variável temporário/auxiliar)
// let aux = var1
// var1 = var2
// var2 = aux

//SWAP usando desestruturação
{ [var1, var2] = [var2, var1]}
console.log('Depois:', {var1, var2})

console.log('-'.repeat(80))

// 2) DESESTRUTURAÇÃO DE OBJETOS
const pessoa = {
    nome: 'Orkutilson Osório Oliveira',
    sexo: 'M',
    dataNasc: '2010-04-29',
    email: 'orkutiilson@gmail.com',
}

/*
    Na desustruturação de objetos, as variáveis avulsos:
    ~> DEVEM ter o MESMO NOME das propriedades do objeto que extraem
    ~> Podem ser especificados em qualquer ordem
    ~> Pode ser feita a desestruturação parcial
*/
const {sexo, nome, email, xtz} = pessoa

console.log('nome:', nome)
console.log('sexo:', sexo)
console.log('email:', email)
console.log('XYZ:', xyz)