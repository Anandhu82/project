// home content animation script
document.addEventListener("DOMContentLoaded", function() {
    var homeContent = document.querySelector(".home-content");
    var homeImage = document.querySelector(".home-image img");
    homeContent.classList.add("show");
    homeImage.classList.add("show");
});

// header section animation
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    header.classList.add("show");
});


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}



// circle skill------
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i=0; i<dots; i++){
      points +='<div class="point" style="--i:${i}; --rot:${rotate}deg"></div>';
    }
    elem.innerHTML = points;

})