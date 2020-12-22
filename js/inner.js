// let ulElemnt = ''

// for (let i =1; i<= 9; i++){
//     ulElemnt += `<li>
//                     <a href="">item ${i}</a>
//                  </li>`
// }

// console.log(ulElemnt);
// let box = document.getElementById('caja2')
// box.innerHTML =  ulElemnt //String

const addElements = (selector, numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach( (koder, index) => {
        if(index < numberElements){
            listKoders += `<li>Koder ${index +1}: ${koder}</li>`
        }
    } )        
    document.querySelector(''+selector).innerHTML = listKoders
}

const add_A_Elements = (selector, numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach( (koder, index) => {
        if(index < numberElements && koder.charAt(0) === 'a'){
            listKoders += `<li>Koder ${index +1}: ${koder}</li>`
        }
    } )        
    document.querySelector(''+selector).innerHTML = listKoders
}

const add_O_Elements = (selector, numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach( (koder, index) => {
        if(index < numberElements && koder.charAt(0) === 'o'){
            listKoders += `<li>Koder ${index +1}: ${koder}</li>`
        }
    } )        
    document.querySelector(''+selector).innerHTML = listKoders
}

const add_R_Elements = (selector, numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach( (koder, index) => {
        if(index < numberElements && koder.charAt(0) === 'r'){
            listKoders += `<li>Koder ${index +1}: ${koder}</li>`
        }
    } )        
    document.querySelector(''+selector).innerHTML = listKoders
}

const kodersArr = ['ale', 'oscar', 'ruben', 'brian']

const filterKoders = letter => {
    let filtrados = kodersArr.filter((koder) => {
        return koder.toLowerCase().startsWith( letter.toLowerCase())
    })
    addElements('#lista', filtrados.length, filtrados)
}

// addElements('#lista', 3, kodersArr)

document.getElementById('orden').value
// onchange() lo tiene que disparar el selector
// document.getElementById ('orden').value
//funcion
//metodo
//innerHTML
//lo tiene que disparar el selector




