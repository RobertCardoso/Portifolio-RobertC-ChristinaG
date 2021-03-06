let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.6 + 'px';
    mountains_behind.style.top = value * 0.4 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 1 + 'px';
    text.style.marginTop = value * 0.5 + 'px';
    btn.style.marginTop = value * 1 + 'px';
    header.style.top = value * 0.5 + 'px';
}
)

const placeForResults = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
});


const primaryNav = document.querySelector(".menu");
const navToggle = document.querySelector(".nav-t");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  
  
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("area-expended", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false)
    navToggle.setAttribute("area-expended", false);
  }
});