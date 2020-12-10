// Exercise 5
// pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días

const MONTH = parseInt(prompt('Dame un número entre 1 y 12: '))

switch (MONTH) {
  case 1:
    console.log("1 -> Enero 31 días")
    break
  case 2:
    console.log("2 -> Febrero 28 días")
    break
  case 3:
    console.log("3 -> Marzo 31 días")
    break
  case 4:
    console.log("4 -> Abril 30 días")
    break
  case 5:
    console.log("5 -> Mayo 31 días")
    break
  case 6:
    console.log("6 -> Junio 30 días")
    break
  case 7:
    console.log("7 -> Julio 31 días")
    break
  case 8:
    console.log("8 -> Agosto 31 días")
    break
  case 9:
    console.log("9 -> Septiembre 30 días")
    break
  case 10:
    console.log("10 -> Octubre 31 días")
    break
  case 11:
    console.log("11 -> Noviembre 30 días")
    break
  case 12:
    console.log("12 -> Diciembre 31 días")
    break
  default:
    console.log('Ese no es un mes');
}

if(MONTH === 1 ||
   MONTH === 3 ||
   MONTH === 5 ||
   MONTH === 7 ||
   MONTH === 8 ||
   MONTH === 10||
   MONTH === 12){
    console.log('Este mes tiene 31 días')
}else if (MONTH === 4 ||
          MONTH === 6 ||
          MONTH === 9 ||
          MONTH === 11){
    console.log('Este mes tiene 30 días')
}else if (MONTH === 2){
    console.log('Este mes puede tener 28 o 29 días');
}else console.log('Este no es un mes válido');


console.log('Fin del Ejercicio 5')
alert('Fin del Ejercicio 5')