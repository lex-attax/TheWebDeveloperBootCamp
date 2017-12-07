var age = prompt("How old are you?")

var isSquare = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0
}

if (age < 0) {
    console.log("Error!")
} else if (age === "21") {
    console.log("happy 21st birthday!!")
} else if (age % 2 !== 0) {
    console.log("your age is odd!")
}
if (isSquare(age)) {
    console.log("perfect square!")
}

