let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let mountains7 = document.getElementById("mountains7");
let boat6 = document.getElementById("boat6");
let river5 = document.getElementById("river5");
let mohamed = document.getElementById("mohamed");
let main = document.querySelector(".main");





window.onscroll = function name(params) {
    let value = scrollY
    stars.style.left = value + "px"
    moon.style.top = value * 3 + "px"
    mountains3.style.top = value * 2 + "px"
    mountains4.style.top = value *1.5 + "px"
    river5.style.top = value *1.2 + "px"
    boat6.style.left = value * 3 + "px"
    mohamed.style.fontSize = value + "px"
    // stars.style.left = value + "px"
    if (scrollY >= 67) {
        mohamed.style.fontSize = 67 + "px"
        mohamed.style.position = "fixed"
        
        if (scrollY >= 360) {
            mohamed.style.display = "none"
        } else {
            mohamed.style.display = "block"
            
        }
        if (scrollY >= 120) {

            main.style.background =  "linear-gradient(#367281,#10001f)"
        } else {
            main.style.background="linear-gradient(#200016,#10001f)" ;

        }
    } 




}