function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length = 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ('')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    } if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 14) {
            //Criança
            img.setAttribute('src', 'homem-bebê.png')
        } else if (idade >= 14 && idade < 21) {
            //Jovem
            img.setAttribute('src', 'homem-jovem.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'homem-adulto.png')
        } else if (idade > 50) {
            // Idoso
            img.setAttribute('src', 'homem-idoso.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'mulher - criança.png')
        } else if (idade >= 10 && idade < 21) {
            //Jovem
            img.setAttribute('src', 'mulher-jovem.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'mulher-adulta.png')
        } else if (idade > 50) {
            // Idoso
            img.setAttribute('src', 'mulher-idosa.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}