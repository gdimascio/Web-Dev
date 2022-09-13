
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "inline-block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function burger_menu(){
    var x = document.getElementById("_burger-links");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("servicios-paquetes");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


function currentPrecio(n) {
    showPrecio(precioIndex = n);
}
function showPrecio(n) {
    let i;
    let paquetes = document.getElementsByClassName("paquete");
    let menu = document.getElementsByClassName("menus");
    if (n > paquetes.length) {precioIndex = 1}    
    if (n < 1) {precioIndex = paquetes.length}
    for (i = 0; i < paquetes.length; i++) {
        paquetes[i].style.display = "none";  
    }
    paquetes[precioIndex-1].style.display = "block";  
    // menu[precioIndex-1].className += " active";

}


function currentDotSimple(n) {
    showDotSimple(dotSimpleIndex = n);
}
function showDotSimple(n) {
    let i;
    let paquetesSimple = document.getElementsByClassName("paquete-data-simple");
    let dotsSimple = document.getElementsByClassName("paquete-data-simple-dot");
    if (n > paquetesSimple.length) {dotSimpleIndex = 1}    
    if (n < 1) {dotSimpleIndex = paquetesSimple.length}
    for (i = 0; i < paquetesSimple.length; i++) {
        paquetesSimple[i].style.display = "none";  
    }
    for (i = 0; i < dotsSimple.length; i++) {
        dotsSimple[i].className = dotsSimple[i].className.replace(" active", "");
    }
    paquetesSimple[dotSimpleIndex-1].style.display = "block";  
    dotsSimple[dotSimpleIndex-1].className += " active";
}


function currentDotTienda(n) {
    showDotTienda(dotTiendaIndex = n);
}
function showDotTienda(n) {
    let i;
    let paquetesTienda = document.getElementsByClassName("paquete-data-tienda");
    let dotsTienda = document.getElementsByClassName("paquete-data-tienda-dot");
    if (n > paquetesTienda.length) {dotTiendaIndex = 1}    
    if (n < 1) {dotTiendaIndex = paquetesTienda.length}
    for (i = 0; i < paquetesTienda.length; i++) {
        paquetesTienda[i].style.display = "none";  
    }
    for (i = 0; i < dotsTienda.length; i++) {
        dotsTienda[i].className = dotsTienda[i].className.replace(" active", "");
    }
    paquetesTienda[dotTiendaIndex-1].style.display = "block";  
    dotsTienda[dotTiendaIndex-1].className += " active";
}
