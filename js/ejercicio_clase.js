console.log('Ejercicio 1')
for (let i=10; i>=0; i--){
    console.log(`8 x ${i} = ${8*i}`)
}

console.log('Ejercicio 2')
for (i=1; i<=100; i++){
    if(i%2 === 0){
        console.log(`${i} es par`)
    }
}

console.log('Ejercicio 3')
const str = 'reverse'
let   rev = ''
for(i=str.length-1; i>=0 ; i--){
    rev = rev.concat(str[i])
}
console.log(rev)

console.log('Ejercicio 2 con while')
i=0
while(i<=10){
    if(i%2 === 0){
        console.log(`${i} es par`)
    }
    i++
}

console.log('Ejercicio 3 con do-while')
i=str.length-1
rev = ''
do{
    rev += str[i]
    i--
}while(i>=0)
console.log(rev)