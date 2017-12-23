function average(src){
    let avg = 0
    let sum = 0
    for(let i = 0; i < src.length; i++){
        sum += src[i]
    }
    avg = Math.round(sum / src.length)
    console.log(avg)
    return avg
}


let scores = [90, 98, 89, 100, 100, 86, 94]
average(scores)

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]
average(scores2)
