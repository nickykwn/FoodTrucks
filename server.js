const dotEnv          = require('dotenv').config({silent: true});
const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');

// set up Routes
const homeRoute       = require('./routes/home');

const app             = express();
const PORT            = process.argv[2] || process.env.PORT || 3000;
const SECRET          = 'tacos3000';

// set default templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// log requests to STDOUT
app.use(logger('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// parse application/json
app.use(bodyParser.json());

// middleware for method override
app.use(methodOverride('_method'));

// This is how we read the cookies set over from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUnitialized: false,
  secret: SECRET
}));

app.listen(port, console.log('Server is listening on port ', PORT));

// set static assets path
app.use(express.static(path.join(__dirname, 'public')));
