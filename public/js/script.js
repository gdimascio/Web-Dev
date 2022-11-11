
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

function showMetodo(){
    let metodos = document.getElementsByClassName("metodologia-checkbox-topic");
    if(metodoIndex > metodos.length-1){metodoIndex = 0; 
    }
    for (i = 0; i < metodos.length; i++) {
        metodos[i].style.display = "none";  
    }
    metodos[metodoIndex].style.display = "block";
    setTimeout("showMetodo(metodoIndex++)", time);
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
    // let menu = document.getElementsByClassName("menus");
    if (n > paquetes.length) {precioIndex = 1}    
    if (n < 1) {precioIndex = paquetes.length}
    for (i = 0; i < paquetes.length; i++) {
        paquetes[i].style.display = "none";  
    }
    paquetes[precioIndex-1].style.display = "block";  
    // menu[precioIndex-1].className += " active";
}


const paquete_data = {
    data: "",
    dot: ""
}
function SetClassSimple(){
    paquete_data.data = document.getElementsByClassName("paquete-data-simple");
    paquete_data.dot = document.getElementsByClassName("paquete-data-simple-dot");
}
function SetClassTienda(){
    paquete_data.data = document.getElementsByClassName("paquete-data-tienda");
    paquete_data.dot = document.getElementsByClassName("paquete-data-tienda-dot");
}
function currentDot(n) {
    showDot(dotIndex = n);
}
function showDot(n) {
    let paquetesP = paquete_data.data;
    let dots = paquete_data.dot;
    let i;
    if (n > paquetesP.length) {dotIndex = 1}    
    if (n < 1) {dotIndex = paquetesP.length}
    for (i = 0; i < paquetesP.length; i++) {
        paquetesP[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    paquetesP[dotIndex-1].style.display = "block";  
    dots[dotIndex-1].className += " active";
}




