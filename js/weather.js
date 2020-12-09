let weather = prompt('¿Cómo está el clima?')

if(weather=='soleado')
{
    console.log('El dia está '+weather)
}
else if(weather=='lluvioso')
{
    console.log('El dia está '+weather)
}
else if(weather=='nevando')
{
    console.log('El dia está '+weather)
}
else if(weather=='nublado')
{
    console.log('El dia está '+weather)
}
else 
{
    let weather_new = prompt('Por favor dame una descripción completa del clima en tu zona')
    console.log(`${weather_new}`)
}