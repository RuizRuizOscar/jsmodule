$(document).ready(function(){
    $('#busqueda').keyup(function(){
     let country = $(this).val();
     $('#ciudades li').hide();
   
     $('#ciudades li:contains("'+country+'")').show();
    
    // Otra forma
    // let ciudades = $("#ciudades li")
    // for(item of ciudades){
    //     console.log(item);
    //     if (item.innerText.toLowerCase().search(country.toLowerCase() !== -1)){
    //         $(item).show()
    //     }
    // }

    // $('#ciudades li').each

    });
   });