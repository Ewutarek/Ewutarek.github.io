// Option 3 - Smooth Scroll - https://github.com/cferdinandi/smooth-scroll
 const scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 50
});

//Display Form 
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

//Close form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Disable Enter Name button, retrive and print name in text

function receiveName()
{
  //Nice to meet you [Username]! Thanks for checking out my site and getting to know me.
  var x = 'Nice to meet you '+document.getElementById("userName").value+ '! Thanks for checking out my site and getting to know me.';
  document.getElementById("hiUser").innerHTML = x;
  document.getElementById('enterNameBtn').style.display = 'none';
  document.getElementById('myForm').style.display = 'none';
  return false;
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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