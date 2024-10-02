let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Oculta todas as slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe 'w3-badge-active' de todos os badges
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("w3-badge-active");
    }

    // Mostra a slide atual
    slides[slideIndex-1].style.display = "block";

    // Adiciona a classe 'w3-badge-active' ao badge correspondente
    dots[slideIndex-1].classList.add("w3-badge-active");
}