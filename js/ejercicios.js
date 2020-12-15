function printTablas(tablas){
    const num = tablas
    for(let i=0; i<num.length; i++){
        for(let j=0; j<=10;j++){
            console.log(`${num[i]} x ${j} = ${ num[i] * j }`)
        }
    }
}

function isPalindrome(phrase){
    const pal_original = phrase
    let pal_check = ''
    let pal_no_space = ''
    pal_no_space = pal_original.replace(/ /g, "");
    for(let i=pal_no_space.length-1; i>=0 ; i--){
        pal_check = pal_check.concat(pal_no_space[i])
    }
    if (pal_no_space === pal_check)
        console.log(`Es palíndromo`)
    else
        console.log(`No es palíndromo`)
}

function getDataType (par1, par2){
    console.log(par1+' es de tipo '+ typeof par1 + ' y ' + par2 + ' es de tipo ' + typeof par2)
}

/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */

function calculateDogAge(age){
    console.log(`El perro tiene ${age*7} años caninos`)
}

/**
 * Crear una función que calcule el area y la circunferencia de un circulo
 * Tomar como parametro del radio del circulo 
 * calcGeometry(4)
 * -> l area del circulo es NN y la circunferencia es de NN
 */

function calcGeometry(radius){
    console.log(`El área del círculo es ${Math.pow(radius,2)*Math.PI} y la circunferencia es de ${2*radius*Math.PI}`)
}


/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */

function temperatureConverter(temp=100,char="C"){
    if (char === "C") {
        console.log(`${temp}° Celsius equivalen a ${(temp*9/5)+32}° Fahrenheit`)
      } else if (char === "F") {
        console.log(`${temp}° Fahrenheit equivalen a ${(temp-32)*5/9}° Celsius`)
      } else console.log(`La temperatura debe ser dada como 'C' o 'F'`)
}

/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */
function getFactorial(fact){
    let res = fact
    for(let i=fact-1; i>0; i--){
        res = res * i
    }
    console.log(`El factorial de ${fact} es ${res}`);
}