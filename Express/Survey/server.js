// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var session = require('express-session');

var app = express();
// more new code:
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
app.get("/result", function (req, res){
    // hard-coded user data
    if (req.session.name == null){
        req.session.name = "";
    }
    if (req.session.location == null){
        req.session.location = 0;
    }
    if (req.session.language == null){
        req.session.language = "";
    }
    if (req.session.comment == null){
        req.session.comment = "";
    }
    var arr = [
        req.session.name, 
        req.session.location, 
        req.session.language, 
        req.session.comment
    ];
    res.render('result', {arr: arr});
})
// post route for adding a user
app.post('/process', function(req, res) {
    console.log(req.body);
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    res.redirect('/result');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});