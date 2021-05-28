window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= 10) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var mybutton = document.getElementById("myBtn");



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}