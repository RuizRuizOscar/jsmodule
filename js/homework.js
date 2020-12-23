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

// onchange() lo tiene que disparar el selector
// document.getElementById ('orden').value
//funcion
//metodo
//innerHTML
//lo tiene que disparar el selector