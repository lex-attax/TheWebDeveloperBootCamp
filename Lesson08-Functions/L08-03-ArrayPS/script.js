function printReverse(array) {
    for (var i = array.length; i >= 0; i--) {
        console.log(array[i])
    }
}

function isUniform(checkUni) {
    for (var i = 1; i <= checkUni.length; i++) {
        if (checkUni[0] === checkUni[i]) {

        } else {
            console.log("Not Uni!")
        }
    }

}

function sumArray(input) {
    var sum = 0
    for (var i = 0; i <= input.length-1; i++) {
        sum += input[i]
    }
    
    return sum
}

function max(params) {
    var max = 0
    for (var i = 0; i <= params.length-1; i++) {
        if (params[i] > max){
            max = params[i]
        }
    }
    return max;
    
}