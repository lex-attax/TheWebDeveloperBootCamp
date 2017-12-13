var button = document.querySelector("button")
var paragraph = document.querySelector("p")

//SETUP CLICK LISTENER
button.addEventListener("click", function(){
    paragraph.textContent = "Someone Clicked the Button"
})