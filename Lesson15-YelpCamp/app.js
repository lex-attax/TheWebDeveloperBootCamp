var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
})

var Campground = mongoose.model("Campground", campgroundSchema)

// Campground.create(
//     {
//         name: "Mountain Goat's rest",
//         image: "http://photosforclass.com/download/15215548990"
        
//     }, function(err, campground){
//         if(err){
//             console.log(err)
//         } else {
//             console.log("newly created campground:")
//             console.log(campground)
//         }
//     })

app.get("/", function(req, res){
    res.render("landing")
})

app.get("/campgrounds", function(req, res){
        //Get all campgrounds from DB
        Campground.find({}, function(err, allCampgrounds){
            if(err){
                console.log(err)
            } else {
                res.render("campgrounds",{campgrounds:allCampgrounds})
            }
        })
})

app.post("/campgrounds", function(req, res){

    //get data from form and add to campgrunds array
    var name = req.body.name
    var image= req.body.image
    var newCampground = {name: name, image: image}
    //create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err)
        } else {
            //redirect back to campgrounds 
            res.redirect("/campgrounds")
        }
    })
})

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started!")
})
