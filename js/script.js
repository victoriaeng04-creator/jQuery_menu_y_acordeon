// Seleccionamos todos los botones del acordeon 


//Menu responsive
$(".menu-btn").on("click", function(){
    $(".munu").slideToggle();
    $(this).toggleClass("abierto");
})

// menu se cierra en versión móvil al hacer click
//1.seleccionar cn jquery opciones del menu y añadirle el evento click
//menu se cierra solo y con slide
//quitamos la clase abierto al botón menú

//Aquí van seis elementos
$(".acordeon__titulo").on("click", function(){
    
   var contenido = $(this).next();
    // Cerramos los démas
    $(".acordeon_contenido").not(contenido).slideUp();
    $(".acordeon__titulo").not(this).removeClass("abierto");

   //contenido.show;
   contenido.slideToggle();
    $(this).toggleClass("abierto");
})