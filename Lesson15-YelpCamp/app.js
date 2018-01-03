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
    image: String,
    description: String
})

var Campground = mongoose.model("Campground", campgroundSchema)

Campground.create(
    {
        name: "Mountain Goat's rest",
        image: "http://photosforclass.com/download/15215548990",
        description: "this is a good place to rest, but there are no bathrooms!"
        
    }, function(err, campground){
        if(err){
            console.log(err)
        } else {
            console.log("newly created campground:")
            console.log(campground)
        }
    })

app.get("/", function(req, res){
    res.render("landing")
})
// INDEX - show all campgrounds
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

// CREATE - add new campground to DB
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
// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs")
})

app.get("/campgrounds/:id", function(req, res){
    // find the campground with provided ID
    // render show template with that campgoround
    res.send("this will be the show page one day")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started!")
})
