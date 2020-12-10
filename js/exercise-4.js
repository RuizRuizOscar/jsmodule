// Exercise 4
// pedir al usuario un numero entre 1 y 7 
// imprimir en consola el dia de la semana equivalente
// es decir:
// 1 -> lunes, 2 -> martes, etc.

const DAY = parseInt(prompt('Dame un número entre 1 y 7: '))

switch (DAY) {
  case 1:
    console.log("1 -> lunes");
    break
  case 2:
    console.log("2 -> martes");
    break
  case 3:
    console.log("3 -> miercoles");
    break
  case 4:
    console.log("4 -> jueves");
    break
  case 5:
    console.log("5 -> viernes");
    break
  case 6:
    console.log("6 -> sabado");
    break
  case 7:
    console.log("7 -> domingo");
    break
}

console.log('Fin del Ejercicio 4')
alert('Fin del Ejercicio 4')