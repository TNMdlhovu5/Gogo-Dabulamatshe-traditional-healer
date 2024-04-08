const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover', () => {
            portfolioItem.childNodes[1].classList.add("img-darken")
        })

        portfolioItem.addEventListener('mouseout', () => {
            portfolioItem.childNodes[1].classList.remove("img-darken")
        })
    })

// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
     slides[slideIndex].classList.add("displaySlide");
     intervalId = setInterval(nextSlide, 5000);
    }
   //console.log(intervalId);
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
       slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
      slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
   slideIndex++;
   showSlide(slideIndex);
}