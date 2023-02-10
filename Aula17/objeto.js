let amigo = {nome:"Nicole", sexo: "F", peso: 70.1,
 engordar(p){ 
    console.log ("engordou")
this.peso += p   
}}
amigo.engordar(2)
console.log (`A ${amigo.nome} pesa ${amigo.peso} kg`)