const WEATHER = prompt('¿Cómo está el clima?')

if(WEATHER=='soleado'){
    console.log('Qué buen día para tender la ropa. Hoy sí se seca')
}else if(WEATHER=='lluvioso'){
    console.log('Hoy se antoja ver llover desde dentro con una taza de chocolate en mano')
}else if(WEATHER=='nevando'){
    console.log('¿Quién quiere hacer angelitos de nieve? ¡Hoy es el día!')
}else if(WEATHER=='nublado'){
    console.log('Un excelente día para salir a correr y no broncearse, pues las nubes te protegerán')
}else {
    const WEATHER_NEW = prompt('Por favor dame una descripción completa del clima en tu zona')
    console.log(`${WEATHER_NEW}`)
}