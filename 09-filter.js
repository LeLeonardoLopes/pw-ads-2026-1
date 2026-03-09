/* 
O método de vetores filter() cria um NOVO VETOR contendo
apenas os elementos que atendam ao criterio reprensentado por uma função 
passada como parâmetro.
*/

const numeros = [12, 19, 3, -4, 13, 11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Econtrando os números negativos no vetor de números
console.log('Apenas números negativos:',
    numeros.filter(n => n < 0)
)

// Um novo vetor apenas com os múltiplos de 5
console.log('Apenas números múltiplos de 5:',
    numeros.filter(x => x % 5 === 0)
)

// Novo vetor apenas com números maiores que 20
console.log('Apenas números maiores que 20:',
    numeros.filter(x => x > 20)
)

// Novo vetor apenas com frutas que começam com a letra 'm'
console.log('Frutas que começam com a letra "m":',
    frutas.filter(el => el.charAt(0) === 'm')
)

// Novo vetor apenas com frutas que terminam com a letra 'r'
console.log('Frutas que terminam com a letra "r":',
    frutas.filter(fru => fru.slice(-1) === 'r')
)