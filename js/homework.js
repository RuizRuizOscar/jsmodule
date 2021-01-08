const orderKoders = (arrayToOrder = kodersArr) => {
    let order = document.getElementById('orden').value
    let str = arrayToOrder.map(c => c.charAt(0).toUpperCase() + c.slice(1) )
    str.sort()
    if(order === "a"){
        addElements('#lista',str.length, str)
    } else if (order === 'd'){
        addElements('#lista',str.length, str.reverse())
    } else {
        console.log('Muestra arr original. Estoy en Seleccionar');
        addElements('#lista',arrayToOrder.length, arrayToOrder)
    }
}

const populateSelectAZ = (selector) => {
    let listaAZ = '<option value="" selected>Seleccionar</option>'
    for(let i=0; i<26; i++){
        listaAZ += `<option value="${String.fromCharCode(65+i)}">${String.fromCharCode(65+i)}</option>`
    }
    document.querySelector(''+selector).innerHTML = listaAZ
}

const filtra = () =>{
    let az = document.getElementById('escogeAZ').value
    let str = kodersArr.filter(c => {
        let temp = c.charAt(0).toUpperCase() + c.slice(1)
        if (temp.startsWith(az) === true){
            return temp
        }
    })
    let str2 = str.map(c => c.charAt(0).toUpperCase() + c.slice(1))
    return str2
}

populateSelectAZ('#escogeAZ')

// onchange() lo tiene que disparar el selector
// document.getElementById ('orden').value
//funcion
//metodo
//innerHTML
//lo tiene que disparar el selector