var express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000

var flash = require('connect-flash');

<<<<<<< HEAD
require('dotenv').config();

/* -------Page Routers-------- */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var selectRouter = require('./routes/select'); // database connect
/* ---------------------------- */
=======
var passport = require("passport");
var request = require('request');

var session = require("express-session");
>>>>>>> 337d41bd233d9f71dba1e8fa889d6dced198678b

var app = express();

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));


app.use(passport.initialize());
app.use(passport.session());

var bodyParser = require('body-parser')

var path = require('path');

app.use('/public', express.static(__dirname + '/public'));

app.use(flash());
app.use(session({secret: 'keyboard cat'}))
app.use(bodyParser());
app.set('view engine', 'pug');
app.set('view options', { layout: false });


require('./lib/routes.js')(app);

app.listen(PORT);
console.log('Node listening on port %s', PORT);
