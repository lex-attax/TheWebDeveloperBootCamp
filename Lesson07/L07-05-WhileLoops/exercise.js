let a = -10

console.log("Print all numbers between -10 and 19")

while (a <= 19) {
    console.log(a)
    a++
}

let b = 10

console.log("Print all even numers between 10 and 40")
while (b <= 40) {
    console.log(b)
    b += 2
}

let c = 301

console.log("Print all odd numbers between 300 and 333")
while (c <= 333) {
    console.log(c)
    c += 2
}

let d = 5

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
while (d <= 50) {
    if (d % 5 === 0 && d % 3 === 0) {
        console.log(d)
        
    }
    d += 5
}