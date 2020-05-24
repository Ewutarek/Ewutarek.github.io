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



// function formAndEnterBtn()
// {
//   var y = document.getElementById("myForm");
//   if (y.style.display === "none") {
//     y.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

// }




// function typeWriter() {

//   var i = 0;
//   var txt = 'Lorem ipsum typing effect!'; /* The text */
//   var speed = 50; /* The speed/duration of the effect in milliseconds */
//   if (i < txt.length) {
//     document.getElementById(_txtID).innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// window.onload = typeWriter();

