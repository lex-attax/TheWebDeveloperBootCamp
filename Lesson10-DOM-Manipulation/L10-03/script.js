var button = document.querySelector("button")
var isPurple = false

//SETUP CLICK LISTENER
/* button.addEventListener("click", function () {
    if (isPurple) {
        document.body.style.background = "white"
    } else {
        //if white make it purple, else make it white
        document.body.style.background = "purple"
    }
    isPurple = !isPurple
}) */

button.addEventListener("click", function () {
        document.body.classList.toggle("purple")
})