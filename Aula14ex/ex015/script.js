function Contar() {
    var inicio = document.getElementById("ninicio")
    var fim = document.getElementById("nfim")
    var passo = document.getElementById("npasso")
    var res = document.getElementById("resultado")
    res.innerText = "Contando: "
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerText += 'Não foi possível iniciar a contagem'
        alert('Por favor, verifique se deixou alguma caixa de texto vazia')
    } else {
        var inicio2 = Number(inicio.value)
        var fim2 = Number(fim.value)
        var passo2 = Number(passo.value)
        if (passo2 <= 0) {
            alert('O passo é inválido, será usado o valor 1')
            passo2 = 1
        }
    }
    if (inicio2 < fim2) {
        for (var c = inicio2; c <= fim2; c += passo2)
            res.innerText += `${c} \u{1F449} `
    } else {
        for (var c = inicio2; c >= fim2; c -= passo2) {
            res.innerText += `${c} \u{1F449}`
        }
    }
    res.innerText += `\u{1F3C1}`

}
