// Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// Scrolling
const navHome = document.getElementById('navHome')
const navStack = document.getElementById('navStack')
const navCurrent = document.getElementById('navCurrent')
const navOther = document.getElementById('navOther')

navHome.addEventListener("click", homeFunction)
navStack.addEventListener("click", stackFunction)
navCurrent.addEventListener("click", currentFunction)
navOther.addEventListener("click", otherFunction)

function homeFunction(){
  document.getElementById("hero").scrollIntoView()
  document.getElementById("navbar").style.top = "-50px";
}
function stackFunction(){
  document.getElementById("stack").scrollIntoView()
  document.getElementById("navbar").style.top = "-50px";
}
function currentFunction(){
  document.getElementById("current").scrollIntoView()
  document.getElementById("navbar").style.top = "-50px";
}
function otherFunction(){
  document.getElementById("other").scrollIntoView()
  document.getElementById("navbar").style.top = "-50px";
}