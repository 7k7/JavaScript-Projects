function countdown() {
    var seconds = document.getElementById('seconds').value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// SLIDESHOW CHALLENGE
let slideIndex = 1;//initializes slide index to 1 (first slide) from the start
showSlides(slideIndex);//f() call to initialize slideshow to display first container 

// Next/previous controls
function plusSlides(n) {// from clicking on next/prev buttons  
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {//when user clicks on dot, number is passed on to this F() onto showSlides() to display it and hightlight dot
    showSlides(slideIndex = n);
}

function showSlides(n) {// sets which slide to display from passed argument slideIndex and which is 'active' and/or shaded which mathes the displayed slide
    let i;//counter for 'for loops'
    let slides = document.getElementsByClassName("mySlides");//gathers collection of slides by class name
    let dots = document.getElementsByClassName("dot");//gathers collection of dots by class name
    if (n > slides.length) {slideIndex = 1}//if slide index greater than number of slides; default to 1   
    if (n < 1) {slideIndex = slides.length}//if slide index less than 1; default to 3(number of slides)
    for (i = 0; i < slides.length; i++) {//resets display property to 'none' for each slide
      slides[i].style.display = "none";//hides slides so that only the slideIndex slide displays in the code block below  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");//resets class name property to '' for each slide
    }
    slides[slideIndex-1].style.display = "block"//display first slide by default
    dots[slideIndex-1].className += " active";//first dot is set to active and shaded in CSS by default
}