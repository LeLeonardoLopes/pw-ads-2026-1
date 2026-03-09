const carros = ['Fusca', 'Chevette', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/*
    O método includes() testa se um determinado elemento existe
    no vetor. Retorna true se existir, ou false, caso contrário.
*/
console.log('Tem fusca?', carros.includes('Fusca'))
console.log('Tem Corcel?', carros.includes('Corcel'))
console.log('Tem Belina?', carros.includes('Belina'))

/*
    O método indexOf() retorna o INDICE (posição) do elemento no vetor.
    Caso o elemento não exista, retorna -1.
*/
console.log('Posição do Maverick:', carros.indexOf('Maverick'))
console.log('Posição do Chvette:', carros.indexOf('Chevette'))
console.log('Posição do Kombi:', carros.indexOf('Kombi'))

/*
    O método includes() só passou a ser parte da linguagem JavaScript
    em 2015. Anteriormente, para testar se um elemento existia no vetor, 
    era necessário testar se o indexOf() era maior ou igual a zero.
*/
console.log('Tem Opala?', carros.indexOf('Opala') >= 0)
console.log('Tem Corcel?', carros.indexOf('Corcel') >= 0)
console.log('Tem Belina?', carros.indexOf('Belina') >= 0)