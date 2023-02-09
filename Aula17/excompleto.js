var numero = document.getElementById("num")
var selnum = document.getElementById ("denovo")
var resposta = document.getElementById ("res")
var valor = []

function simounao (n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}





function adicionar (){
    
    if (numero.value.length == 0 || input.value == ""){
        window.alert ('Valor inválido ou já adicionado na lista')
    } else {
        var n = Number(numero.value)
        selnum.innerText = ""
        while (n >= 100){
            var item = document.createElement ('option')
            item.text = `O valor ${n} foi adicionado`
            item.value = `selnum ${n}`
            selnum.appendChild(item)
        }
    }
}