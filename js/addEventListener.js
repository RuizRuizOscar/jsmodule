// document.getElementById('email').addEventListener('focus'),function(){
//     console.log('');
// }

let showAll = document.getElementById('showAll')
showAll.addEventListener("click", function(){
    addElements('#lista', kodersArr.length, kodersArr)
})

let orden = document.getElementById('orden')
orden.addEventListener("change", function(){
    let str2 = filtra()
    orderKoders(str2)
})

let escogeAZ = document.getElementById('escogeAZ')
escogeAZ.addEventListener('change', function(){
    let str2 = filtra()
    orderKoders(str2)
})