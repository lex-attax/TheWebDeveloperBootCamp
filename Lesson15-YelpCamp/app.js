var express = require("express")
var app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("landing")
})

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "http://photosforclass.com/download/4684194306"},
        {name: "Granite Hill", image: "http://photosforclass.com/download/2164766085"},
        {name: "Mountain Goat's rest", image: "http://photosforclass.com/download/15215548990"}
        ]
        
        res.render("campgrounds",{campgrounds:campgrounds})
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started!")
})
