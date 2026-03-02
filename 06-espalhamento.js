// Encontrando o menor e o maior números em uma série
let minimo = Math.min(2, -5 , 4, 0, 11, -1)
let maximo = Math.max(2, -5 , 4, 0, 11, -1)

console.log('Valores minimos e maximos determinados a partir de valores avulsos:')
console.log({minimo, maximo})

console.log('-'.repeat(80))
// E se os números estivessem em um vetor ? 
const nums = [2, -5 , 4, 0, 11, -1]

/*
    math.min() e math.max() não conseguem trabalhar  quando os numeros estão em um vetor
*/    

minimo = Math.min(nums)
maximo = Math.max(nums)

console.log('Valores minimos e maximos determinados a partir de valores avulsos:')
console.log({minimo, maximo})

console.log('-'.repeat(80))

/*
    A sitaxe de espalhamento (spreading), representada por ... antes do nome de uma variavel que contém
    um vetor ou um objeto, é capaz de "desempacotar" um vetor ou objeto em uma série de valores avulsos
*/
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log('Valores calculados após aplicação do espalhamento no vetor:')
console.log({minimo, maximo})

/* OUTROS USOS PARA A SINTAXE DE ESPALHAMENTO */

const carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1980 ,
    cor : 'bege'
}

// "copiando" Carro1 para carro2

// const carro2 = carro1 -- NÃO FUNCIONA COMO DEVERIA FUNCIONAR
//Para cirar uma cópia real de um objeto (e não uma nova refêrencia a ele), podemos usar a sintaxe de espalhamento. Ela "desmonta" o
// objeto original e, em seguida, "remonta", mas em uma nova posição
const carro2 = {...carro1}

// Mudando o valor das propriedades da carro2
carro2.modelo = 'Fusca'
carro2.marca = 'VolksWagen'
carro2.cor = 'preto'
carro2.ano = 1969

console.log('-'.repeat(80))

// Exibindo ambos os carros
console.log({carro1, carro2})