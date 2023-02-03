var Agora = new Date ()
var hora = Agora.getHours ()
console.log (`Agora são exatamente ${hora} horas`)
if (hora >6 && hora < 12) {
    console.log ("Bom dia!")
} else if (hora >=12) {
    console.log ("Boa Tarde!")
}  else if (hora > 18) {
    console.log ('Boa Noite!')
} else if (hora >1 && hora <=5) {
    console.log ("Boa Madrugada!")
}