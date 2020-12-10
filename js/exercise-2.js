// Exercise 2
// pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo

const NUM = parseInt(prompt('Dame un número entre 1 y 100: '))

if(NUM%2 == 0 && NUM%11 == 0){
    console.log(`El número ${NUM} es divisible entre 2 y entre 11`)
}else{
    console.log(`El número ${NUM} NO es divisible entre 2 y entre 11`)
}

console.log('Fin del Ejercicio 2')
alert('Fin del Ejercicio 2')