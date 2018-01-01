var express = require("express")
var app = express()
var request = require("request")

app.get("/results", function(req, res){
    request("http://omdbapi.com/?s?california", function(error, response, body){
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body)
            res.send(results["Search"][0]["Title"])
        }
    })
})


// Tell Express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")
})
