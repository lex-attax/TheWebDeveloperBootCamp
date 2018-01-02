var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

var campgrounds = [
        {name: "Salmon Creek", image: "http://photosforclass.com/download/4684194306"},
        {name: "Granite Hill", image: "http://photosforclass.com/download/2164766085"},
        {name: "Mountain Goat's rest", image: "http://photosforclass.com/download/15215548990"}
        ]

app.get("/", function(req, res){
    res.render("landing")
})

app.get("/campgrounds", function(req, res){

        res.render("campgrounds",{campgrounds:campgrounds})
})

app.post("/campgrounds", function(req, res){

    //get data from form and add to campgrunds array
    var name = req.body.name
    var image= req.body.image
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground)
    //redirect back to campgrounds 
    res.redirect("/campgrounds")
})

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started!")
})
