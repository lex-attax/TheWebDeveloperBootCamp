function factorial(num) {
    var x = num
    var result = num;
    while (x > 1) {
        result *= (x - 1)
        x--
    }
    return result
}