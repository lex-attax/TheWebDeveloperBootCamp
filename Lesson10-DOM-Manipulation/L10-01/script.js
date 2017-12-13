//querySelector uses CSS-Style selector
var body = document.querySelector("body") //SELECT
var isBlue = false

setInterval(function () { //MANIPULATE
    if (isBlue) {
        body.style.background = "white"
    } else {
        body.style.background = "#3498db"
    }
    isBlue = !isBlue;
}, 1000)