/*
vetor original.original
*/

const numeros = [13,19,3,-4,13,-11,15,-1,0]
const frutas = ['laranja','abacaxi','maçã','uva','jaboticaba', 'maracujá']

// gerando um novo vetor em que cada elemento corresponde ao valor
// do elemento original elevado ao quadrado
const quadrados = numeros.map(n => n ** 2)

console.log('ORIGINAL : ', numeros)
console.log('QUADRADOS: ', quadrados)

// map() qie tramsforma os elementos do vetor original em itens
// da lista para uso em uma pagina HTML(uso frequente em react)
const itensLista = frutas.map(f => `<li>${f}</li>`)

console.log('-'.repeat(80))


console.log('<h1>FRUTAS ENCONTRADAS NO BRASIL</h1>')
console.log('<ul>')
for(const item of itensLista) console.log(item)
console.log('</ul>')