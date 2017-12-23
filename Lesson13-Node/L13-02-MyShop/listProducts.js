//npm install faker

var faker = require('faker')

console.log("====================")
console.log("WELCOME TO MY SHOP!")
console.log("====================")

for(var i = 0; i < 10; i++){
    var randomProduct = faker.commerce.product()
    var randomPrice = faker.commerce.price()
    console.log (randomProduct + " - " + randomPrice)
}
