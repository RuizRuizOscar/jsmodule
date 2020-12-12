function alertMoonWeight(){
    let earth_weight = prompt('¿Cuál es tu peso en Kg?')
    let moon_weight = (earth_weight/9.81)*1.622   
    alert(`**Tu peso en la Luna es de ${moon_weight} kg**`)
}

// Exercise 1
// 1. pedir al usuario la calificación de un examen ( 0 a 100) 
// Imprimir en consola las equivalencias en letra su calificación, es decir
// -> si es mayor o igual a 90, imprimir "A"
// -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
// -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
// -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
// -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
// -> si es menor 50 , imprimir "F"

function printGradeLetter(){
    const GRADE = parseInt(prompt('Por favor dame la calificación de un examen (0 a 100): ')) 
    if(GRADE>=90){
        console.log('A')
    }else if(GRADE>=80 && GRADE<90){
        console.log('B')
    }else if(GRADE>=70 && GRADE<80){
        console.log('C')
    }else if(GRADE>=60 && GRADE<70){
        console.log('D')
    }else if(GRADE>=50 && GRADE<60){
        console.log('E')
    }else if(GRADE<50){
        console.log('F')
    }
}


// Exercise 2
// pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo

const NUM = parseInt(prompt('Dame un número entre 1 y 100: '))

if(NUM%2 === 0 && NUM%11 === 0){
    console.log(`El número ${NUM} es divisible entre 2 y entre 11`)
}else{
    console.log(`El número ${NUM} NO es divisible entre 2 y entre 11`)
}

console.log('Fin del Ejercicio 2')
alert('Fin del Ejercicio 2')

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

PAR%2 === 0?
console.log(`El número ${PAR} es par`)
:
console.log(`El número ${PAR} es impar`)

console.log('Fin del Ejercicio 3')
alert('Fin del Ejercicio 3')

// Exercise 4
// pedir al usuario un numero entre 1 y 7 
// imprimir en consola el dia de la semana equivalente
// es decir:
// 1 -> lunes, 2 -> martes, etc.

const DAY = parseInt(prompt('Dame un nÃºmero entre 1 y 7: '))

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

/** 
 * ejercicio 1
    1. Asignar un string a una variable 
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/

console.log('Ejercicio 1');
const STR1 = 'Hola Koders'
console.log(`El String ${STR1} tiene ${STR1.length} caracteres`); 

/**
 * Ejercicio 2
 * Declarar 2 variables con strings y concatenarlos
 */
console.log('Ejercicio 2');
const STR2 = ' qué hacen?'
let str_result = STR1.concat(STR2)
console.log(`La concatenación resultante es: ${str_result}`);

 /**
 * Ejercicio 3
 * Declarar un string de al menos 10 caracteres
 * imprimir en consola del 4 al 6 caracter
 */
console.log('Ejercicio 3');
const STR3 = 'Aqui kodeando con el team';
let str3_result = STR3.slice(4,7)
console.log(`Impresión de caracteres 4 al 6 Forma 1: "${str3_result}"`);
str3_result = STR3.substr(4,3)
console.log(`Impresión de caracteres 4 al 6 Forma 2: "${str3_result}"`);

/**
 * Ejercicio 4
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 */
console.log('Ejercicio 4');
const STR4 = 'Hola mundo'
let str4_result = STR4.replace(" ","-")
console.log(`El string resultante es: ${str4_result}`);

 /**
 * Ejercicio 5
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */
console.log('Ejercicio 5');
const STR5 = 'hola chicuelos'
let str5_1 = STR5[0].toUpperCase()
let str5_2 = STR5[5].toUpperCase()
let str5_3 = STR5.substr(1,4)
let str5_4 = STR5.substr(6)
let str5_5 = str5_1.concat(str5_3,str5_2,str5_4)
console.log(`Las palabras Capitalizadas son: ${str5_5}`);

let str5_array = STR5.split(' ')
let str5_char1 = str5_array[0].split('')[0].toUpperCase()
let str5_char2 = str5_array[1].split('')[0].toUpperCase()
console.log(`El string Capitalizado es: ${str5_char1.concat(str5_3,str5_char2,str5_4)} ` )

/**
 * Ejercicio 6
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 */
console.log('Ejercicio 6');
const STR6 = 'oscar@kodemia.mx'
let n = STR6.indexOf('@')
// console.log('El @ esta en '+n);
let email_masked = STR6.replace('oscar','*****')
console.log(email_masked);

/**
 * Ejercicio 8
 * Declarar un string de al menos 2 palabras
 * convertir ese string en un array
 * "Hola koders"
 *  ["hola", "koders"]
 */
console.log('Ejercicio 8 (no hay 7)');
const STR8 = 'Elvira Nayeli'
let str8_result = STR8.split(' ')
console.log(str8_result);

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
