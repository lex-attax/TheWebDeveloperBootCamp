var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express()

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app")
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema)

// RESTFUL ROUTES

app.get("/", function(req, res){
    res.redirect("/blogs")
})

// INDEX ROUTE
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR!")
        } else {
            res.render("index", {blogs: blogs})
        }
    })
})

// NEW ROUTER
app.get("/blogs/new", function(req, res){
    res.render("new")
})
//CREATE ROUTE
app.post("/blogs", function(req, res){
    // create blog
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new")
        } else {    
            //then, redirect to the index
            res.redirect("/blogs")
        }
    })
    //then, redirect to the index
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!")
})
