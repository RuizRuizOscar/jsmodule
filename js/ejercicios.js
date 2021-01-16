// Ejercicios
// Del listado "#vacations"
// 1.  Seleccionar elementos de tipo 'h2' y cambiar el color
$('h2').css('color','aquamarine')
// $('h2').css('color', 'blue')
// 2.  Selecciona aquellos ítems que tenga la clase .america y modificar el color
$('.america').css('color','yellow')
// 3.  Modificar el precio de todos los vuelos para que ahora sea $199.99
$('.details').empty().append('$199.99')
// 4.  Modifica todos los títulos de las vacaciones (h2), 
//     su nuevo valor será "Titulo de tu agrado".
    // $('h2').empty().append('Tulum Quintana Roo')
// Del listado sorting
// 1. Cuando le den click al link de America, Europe o Asia
//     Filtrar del listado "#vacations" filtrar los li con la clase America, Europe o Asia
//     y ocultar los demás
$('[href]').click(function(){
    console.log('Hola')
})
// 2. Si le dan click a todos
//     Filtrar del listado "#vacations" filtrar los li con la clase America, Europe y Asia
// Del listado Faq
// 1. Al cargar la pagina, mostrar la pregunta 1
// 2. Al dar click en head__faq aparecer la descripcion de la pregunta
//     y desaparecer las descripciones que esten mostradas