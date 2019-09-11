// CONFIG
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));                                             // tells express where to find all our static files
app.use(express.urlencoded({extended: true}));                                              // for post routes to work
app.set('view engine', 'ejs');                                                              // tells express we are using ejs, gives it location to find ejs files
app.set('views', __dirname + '/views');                                                     // "copy above"

const session = require('express-session');                                                 // to use session
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

// ROUTES
require('./routes')(app);

// SERVER LISTEN
app.listen(8000, () => console.log("listening on port 8000"));