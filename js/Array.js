const myArray = ["string",2 ,3 ,9 , [1,23]]
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[2][2])

// for(let )

const array = [1,4,7]

//imprimir en consola el resultado de la suma 
// de todos los elementos de un array
let sum =0
for (let i=0;i<array.length;i++){
    sum += array[i] 
}
console.log(sum);

//imprimir en consola las tablas de los numeros
//que se encuentren dentro de un array
for (let i=0;i < array.length;i++){
    const tableNumber = array[i]

    for (let n=1;n<=10; n++){
        console.log(`${tableNumber} x ${n} = ${tableNumber * n}`)
    }
}

const arrayCitys = ['cdmx', 'Monterrey', 'guadalajara']

arrayCitys.forEach(function(currentElement, index, arrayOriginal)){
    //sentencias
    console.log(index, currentElement, arrayOriginal)
}

arrayCitys.forEach(function(currentElement) {
    //sentencias
    if(currentElement.startsWith('c') || currentElement.startsWith('C')){
        console.log(currentElement)
    }
})

arrayCitys.forEach( currentElement => {
    //sentencias
    if(currentElement.startsWith('c') || currentElement.startsWith('C') ) {
        console.log(currentElement)
    }
})