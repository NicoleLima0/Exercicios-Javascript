function gerartabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
   
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerText = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
        /*  for (var c = 1; c <= 10; c++) {
             tabuada += num2 + "x" + c + "=" + num2 * c + "<br/>";
             res.innerHTML = tabuada
 
         } */

