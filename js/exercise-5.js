// Exercise 5
// pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días

const MONTH = parseInt(prompt('Dame un número entre 1 y 12: '))

switch (MONTH) {
  case 1:
    console.log("1 -> Enero")
    break
  case 2:
    console.log("2 -> Febrero")
    break
  case 3:
    console.log("3 -> Marzo")
    break
  case 4:
    console.log("4 -> Abril")
    break
  case 5:
    console.log("5 -> Mayo")
    break
  case 6:
    console.log("6 -> Junio")
    break
  case 7:
    console.log("7 -> Julio")
    break
  case 8:
    console.log("8 -> Agosto")
    break
  case 9:
    console.log("9 -> Septiembre")
    break
  case 10:
    console.log("10 -> Octubre")
    break
  case 11:
    console.log("11 -> Noviembre")
    break
  case 12:
    console.log("12 -> Diciembre")
    break
  default:
    console.log('Ese no es un mes');
}
console.log('Fin del Ejercicio 5')
alert('Fin del Ejercicio 5')