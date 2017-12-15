let p1Button = document.querySelector("#p1")
let p2Button = document.getElementById("p2")
let p1Display = document.querySelector("#p1Display")
let p2Display = document.querySelector("#p2Display")
let h1 = document.querySelector("h1")
let p1Score = 0
let p2Score = 0
let gameOver = false
let winningScore = 5

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++
        if(p1Score === winningScore)
            gameOver = true
        p1Display.textContent = p1Score
    }

})

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++
        if(p2Score === winningScore)
            gameOver = true
        p2Display.textContent = p2Score
    }
})