/*function adicionarNumero() {
    let num = document.getElementById('num')
    let numeros = document.getElementById('numeros')
    let n = Number(num.value)
    if (n < 0 || n > 100 || num.value.length == 0) {
        alert('Número inválido! Digite um número entre 0 e 100.')
    } else {
        let option = document.createElement('option')
        option.text = `Valor ${n} adicionado.`
        numeros.appendChild(option)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let numeros = document.getElementById('numeros')
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let valores = []
        for (let i = 0; i < numeros.length; i++) {
            valores.push(Number(numeros.options[i].text.split(' ')[1]))
        }
        let total = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = valores.reduce((a, b) => a + b, 0)
        let media = soma / total

        let resultado = document.getElementById('resultado')
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números inseridos.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}*/

let num = document.querySelector('input#num')
let lista = document.querySelector('select#numeros')
let res = document.querySelector('div#resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 0 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionarNumero() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Número inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = valores.reduce((a, b) => a + b, 0)
        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números inseridos.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}   
