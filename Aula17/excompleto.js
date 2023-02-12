let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
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

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado`
        item.value = `lista ${num.value}`
        lista.appendChild(item)
    } else {
        window.alert("Número inválido ou já adicionado na lista")
    }

    num.value = ''
    num.focus()
}


function finalizar() {
    let tot = valores.length
    let soma = 0
    let maior = valores[0]
    let menor = valores[0]

    for (let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / tot

    ni.innerHTML = `A média dos valores é de ${media}!`
    res.innerHTML = `O total de números inseridos é de ${tot}`
    vi.innerHTML = `A soma dos números inseridos é de ${soma}`
    mai.innerHTML = `O maior número é ${maior}`
    men.innerHTML = `O menor número é ${menor}`
    
}