const orderKoders = () => {
    let order = document.getElementById('orden').value
    let str = kodersArr.map(c => c.charAt(0).toUpperCase() + c.slice(1) )
    str.sort()
    if(order === "a"){
        addElements('#lista',str.length, str)
    } else if (order === 'd'){
        addElements('#lista',str.length, str.reverse())
    } else {
        console.log('Muestra arr original. Estoy en Seleccionar');
        addElements('#lista',kodersArr.length, kodersArr)
    }
}

const populateSelectAZ = (selector) => {
    let listaAZ = '<option value="" selected>Seleccionar</option>'
    for(let i=0; i<26; i++){
        listaAZ += `<option value="${String.fromCharCode(65+i)}">${String.fromCharCode(65+i)}</option>`
    }
    document.querySelector(''+selector).innerHTML = listaAZ
}

populateSelectAZ('#escogeAZ')

// onchange() lo tiene que disparar el selector
// document.getElementById ('orden').value
//funcion
//metodo
//innerHTML
//lo tiene que disparar el selector