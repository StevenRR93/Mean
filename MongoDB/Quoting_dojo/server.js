// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var session = require('express-session');
var app = express();

//mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes');
mongoose.Promise = global.Promise;

// more new code:
app.use(session({secret: 'codingdojorocks', resave: true, saveUninitialized: true}));  // string for encryption
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
/////////////////////////////////////////////////////////////////////////
var QuoteSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    message: {type: String, required: true, minlength: 5},
   }, {timestamps: true})
   // Store the Schema under the name 'Quote'
   mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
   var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'

/////////////////////////////////////////////////////////////////////////
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
app.get('/quotes', function (req, res){
    // hard-coded quote data
    // Using the Quote Schema...
// ...retrieve all records matching {}
    Quote.find({}, function(err, quotes) {
        // Retrieve an array of quotes
        // This code will run when the DB is done attempting to retrieve all matching records to {}
        if(err){
            res.redirect('index');
            console.log('Error'+ err);
        } else {
            res.render('quotes', {quotes: quotes});
            console.log('should it be reading here?');
        }
    })
})
// post route for adding a quote
app.post('/process', function(req, res) {
    // Create a Schema for Quotes
    console.log("POST DATA", req.body);
    // create a new Quote with the name and age corresponding to those from req.body
    var q = new Quote();
    q.name = req.body.name;
    q.message = req.body.message;
    q.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('Error: '+err);
          res.redirect('/');
        } else { 
          res.redirect('/quotes');
        }
    });
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});