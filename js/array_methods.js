//imprimir en consola las tablas de los numeros
//que se encuentren dentro de un array
// for (let i=0;i < array.length;i++){

const array2 = [1,4,7]
array2.forEach( currentElement => {
    let tableNumber = currentElement
    for (let n = 1 ; n <= 10 ; n++){
        console.log(`${tableNumber} x ${n} = ${tableNumber * n}`)
    }
})

// array2 = [1,4,7]
array2.forEach( currentTable => {
    let arrayMultiples = [1,2,3,4,5,6,7,8,9,10]
    arrayMultiples.forEach( currentMultiple => {
        console.log(`${currentTable} x ${currentMultiple} = ${currentTable * currentMultiple}`)
    })
})

//function 
// [1,2,3]
// -> [2,4,6]

const doubleValues = arrNumbers => {
    let res = []
    arrNumbers.forEach( c => {
        res.push(c*2)
    })
    return res
}

//function 
// [1,2,3,4]
// -> [2,4]

const onlyEvenValues = arrNumbers => {
    let res = []
    arrNumbers.forEach( c => {
        if(c%2 === 0)
            res.push(c)
    })
    return res
}

//function 
// ['hola','mundo','que','tal']
// -> ['ha','mo','qe','tl']

const firstAndLast = arrStrings => {
    let res = []
    arrStrings.forEach( c => {
        res.push( c.charAt(0) + c.charAt(c.length-1))
    })
    return res
}

// .map()
// currentValue, index, arrayOriginal
// -> []

const resultMap = [1,20,300].map((currentValue, index, arr) => {
    console.log(currentValue, index, arr)
})

const resultMap = 
[1,20,300].map( (currentValue) => currentValue *2 )

let result1 = array.map( function(c,i,arr){
    return c*2
})

let result2 = array.map(c => {
    return c * 2
})

let result3 = array.map(c => c*2)

// Ahora en forma de funcion
//1
const doubleValuesMap = (arr) => {
    const resultArray = arr.map(c =>c*2)
    return resultArray
}
//2
const doubleValuesMap = (arr) => {
    return arr.map(c =>c*2)
}
//3
const doubleValuesMap = (arr) => arr.map(c =>c*2)
//4
const doubleValuesMap = arr => arr.map(c =>c*2)

// PROPOSITO DE FILTER = retornar array con items filtrados
// [1,2,3,4]
// []
// .filter( condicion )
[1,2,3,4].filter((item) =>{
    return item%2 === 0
})

[1,2,3,4].filter( item => item%2 === 0 && item > 2)

// [9,10,30]
// []
.reduce()