


















// Funcion imprime tabla de un numero en reversa del 0 al 10 
function printReverseTablaDel(tabla){
    for (let i=10; i>=0; i--){
        console.log(`${tabla} x ${i} = ${tabla*i}`)
    }
}

// Funcion imprime pares dentro de un rango
function esPar(min, max){
    for (let i=min; i<=max; i++){
        if(i%2 === 0){
            console.log(`${i} es par`)
        }
    }
}

// Funcion imprime palabra al revés usando for
function printBackwards(word){
    const backwards = word
    let rev = ''
    for(let i=backwards.length-1; i>=0 ; i--){
        rev = rev.concat(backwards[i])
    }
    console.log(rev)
}

// Funcion imprime pares dentro de un rango usando while
function printIsPair(min,max){    
    let i=min
    while(i<=max){
        if(i%2 === 0){
            console.log(`${i} es par`)
        }
        i++
    }
}
    
// Funcion imprime palabra al reves
function printBackwards2(word){
    const toReverse = word
    let rev = ''
    i=toReverse.length-1
    do{
        rev += toReverse[i]
        i--
    }while(i>=0)
    console.log(rev)
}
