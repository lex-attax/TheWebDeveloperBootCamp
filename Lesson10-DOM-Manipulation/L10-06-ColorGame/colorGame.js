let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

let squares = document.querySelectorAll(".square")
let pickedColor = pickColor()
let colorDisplay = document.getElementById("colorDisplay")
let messageDisplay = document.querySelector("#message")


colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor)
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again"
        }
    })
}

function changeColors(color) {
    //loop through all squares & change each color to given color
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}