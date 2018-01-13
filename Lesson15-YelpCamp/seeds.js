var mongoose = require("mongoose")
var Campground = require("./models/campground")
var Comment = require("./models/comment")

var data = [
    {
        name: "Could's Rest",
        image: "https://farm4.staticflickr.com/3282/2770447094_2c64348643.jpg",
        description:"blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg",
        description:"blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://farm6.staticflickr.com/5108/5789045796_27c9217bf2.jpg",
        description:"blah blah blah"
    }
]

function seedDB(){
    // remove all campgrounds
Campground.remove({}, function(err){
    if(err){
        console.log(err)
    } else {
    console.log("removed campgrounds!")
    //add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err) {
                console.log(err)            
            } else {
                console.log("added a campground")
                // create a comment
                Comment.create(
                    {
                        text:"This place is great, but I wish there was internet",
                        author:"Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err)
                        } else {
                        campground.comments.push(comment)
                        campground.save()
                        console.log("Created new comment")
                        }
                    })
            }
        
        })
    })
    }
})    
}



// add a few comments

module.exports = seedDB;
