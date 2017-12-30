var request = require('request')
request('http://www.reddit.com', function(error, response, body){
    if(error){
        console.log("something went wrong!")
        console.log(error)
    } else {
        if(response.statusCode === 200){
            //things worked!
            console.log(body)
        }
    }
})
