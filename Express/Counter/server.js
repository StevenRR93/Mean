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
if (req.session.counter == null){
    req.session.counter = 0;
}
 req.session.counter++;
 res.render("index", {count: req.session.counter});
})
app.get('/ptwo', function(req, res) {
    if (req.session.counter == null){
        req.session.counter = 0;
    }
    req.session.counter++;
    res.redirect('/');
})
// post route for adding a user
app.get('/reset', function(req, res) {
 req.session.counter = 0;
 res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});