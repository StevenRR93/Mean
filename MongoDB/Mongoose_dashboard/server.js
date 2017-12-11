// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var session = require('express-session');
var app = express();

//mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dashboard');
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
var CatSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    breed: {type: String, required: true, minlength: 2},
    description: {type: String, required: true, minlength: 5},
    weight: {type: Number, required: true},
   }, {timestamps: true})
   // Store the Schema under the name 'Quote'
   mongoose.model('Cat', CatSchema); // We are setting this Schema in our Models as 'Cat'
   var Cat = mongoose.model('Cat') // We are retrieving this Schema from our Models, named 'Cat'

/////////////////////////////////////////////////////////////////////////
// root route to render the index.ejs view
app.get('/', function(req, res) {
 Cat.find({}, function(err, cats) {
    // Retrieve an array of quotes
    // This code will run when the DB is done attempting to retrieve all matching records to {}
    if(err){
        console.log('Error'+ err);
        res.render('index', {cats: []});
    } else {
        res.render('index', {cats: cats});
    }
})
})
app.get('/cat/:id', function (req, res){
    // Using the Cat Schema...
// ...retrieve all records matching {}
    Cat.findOne({_id: req.params.id}, function(err, cats) {
        // Retrieve an array of quotes
        // This code will run when the DB is done attempting to retrieve all matching records to {}
        if(err){
            console.log('Error'+ err);
            res.redirect('cats/new');
        } else {
            res.render('catinfo', {cats: cats});
        }
    })
})
app.get('/cats/new', function (req, res){
    res.render("new");
})
app.post('/cats', function (req, res){
    console.log("POST DATA", req.body);
    // create a new Quote with the name and age corresponding to those from req.body
    var q = new Cat();
    q.name = req.body.name;
    q.breed = req.body.breed;
    q.description = req.body.description;
    q.weight = req.body.weight;
    q.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('Error: '+err);
          res.redirect('/');
        } else { 
          res.redirect('/');
        }
    });
})
app.get('/cat/edit/:id', function (req, res){
    Cat.findOne({_id: req.params.id}, function(err, cats) {
        // Retrieve an array of cats
        // This code will run when the DB is done attempting to retrieve all matching records to {}
        if(err){

            console.log('Error'+ err);
            res.redirect('/');
        } else {
            res.render('edit', {cats: cats});
        }
    })
})
app.post('/cat/:id', function (req, res){
    Cat.findOne({_id: req.params.id}, function(err, cats) {
        // Retrieve an array of cats
        // This code will run when the DB is done attempting to retrieve all matching records to {}
        if(err){

            console.log('Error'+ err);
            res.redirect('/cat/edit/'+cats._id);
        } else {
            
            cats.name = req.body.name;
            cats.breed = req.body.breed;
            cats.description = req.body.description;
            cats.weight = req.body.weight;
            cats.save(function(err) {
                // if there is an error console.log that something went wrong!
                if(err) {
                  console.log('Error: '+err);
                  res.redirect('/cat/edit/'+cats._id);
                } else { 
                  res.redirect('/');
                }
            });
        }
    })
})
app.post('/cat/destroy/:id', function (req, res){
    Cat.remove({_id: req.params.id}, function(err){
        if(err) {
            console.log('Error: '+err);
            res.redirect('/');
          } else { 
            res.redirect('/');
          }
    });
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});