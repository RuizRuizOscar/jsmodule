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
        console.log(`Son iguales`);
}

function getDataType (par1, par2){
    console.log(par1+' es de tipo '+ typeof par1 + ' y ' + par2 + ' es de tipo ' + typeof par2)
}