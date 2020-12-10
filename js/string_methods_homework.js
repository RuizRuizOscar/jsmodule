// Imprimir en consola la tabla del 7
// 7 x 1 = 7
console.log('Ejercicio 1');
for(let i=0; i<=10;i++){
    console.log(`7 x ${i} = ${7*i}`)
}

// imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
// 3,6,7,9,12,14,15....
console.log('Ejercicio 2');
let str_2 =''
let comma =true
for(let i=0; i<=100;i++){
    if(i%3 === 0 || i%7 === 0){
        if(!comma)
        str_2 = str_2.concat(',',i.toString())
        else if(comma){
            str_2 = str_2.concat(i.toString())
            comma = false
        }
    }
}
console.log(str_2)

// imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
// “en un lugar de la mancha” -> 5
console.log('Ejercicio 3');
let j = 0 
let str_3 = 'en un lugar de la mancha'
for (let i = 0; i < str_3.length; i++) {
    if(str_3.charAt(i) === ' ')
        j++
}
console.log(`"${str_3}" -> ${j}`);

// imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
// “Hola mundo” -> 4

console.log('Ejercicio 4');
j = 0 
let str_4 = 'Parangaricutirimicuaro'
for (let i = 0; i < str_4.length; i++) {
    switch( str_4.charAt(i) ) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            j++
    }
}
console.log(`"${str_4}" -> ${j} vocales`);