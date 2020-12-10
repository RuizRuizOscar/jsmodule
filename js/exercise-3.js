// Exercise 3
// pedir al usuario por prompt un numero entre 1 y 100
// verificar si es un par o impar
// imprimir el resultado en consola

const PAR = parseInt(prompt('Dame un número entre 1 y 100: '))

// if(PAR%2 == 0){
//     console.log(`El número ${PAR} es par`)
// }else{
//     console.log(`El número ${PAR} es impar`)
// }

PAR%2 == 0?
console.log(`El número ${PAR} es par`)
:
console.log(`El número ${PAR} es impar`)

console.log('Fin del Ejercicio 3')
alert('Fin del Ejercicio 3')