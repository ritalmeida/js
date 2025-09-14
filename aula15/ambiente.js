let num = [5, 8, 2, 9, 3]

//num[3] = 6


//num.push(1) //adiciona um valor ao final do vetor
num.sort() //coloca em ordem crescente
num.push(1) //adiciona um valor ao final do vetor
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(num[0])
console.log('O primeiro valor do vetor é ' + num[0])

//let pos = num.indexOf(8)
let pos = num.indexOf(7) //se o valor não existir, retorna -1
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else
console.log(`O valor 8 está na posição ${pos}`)
