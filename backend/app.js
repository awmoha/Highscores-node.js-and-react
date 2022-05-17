var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require("express-ejs-layouts");
const { Pool } = require("pg");

const cors = require('cors');

//const session = require('express-session');

var indexRouter = require('./routes/index');
var searchRouter = require("./routes/search");
var gamesRouter = require('./routes/games');
var adminRouter = require('./routes/adminTable');
var newSpelRouter = require('./routes/nyaspel');
var newScoreRouter = require('./routes/adminScore');

//API
var gamesApiRouter = require('./routes/api/games')
var scoresApiRouter = require('./routes/api/scores')
var authApiRouter = require('./routes/api/auth');


var app = express();
//app.locals.basked = [];

app.locals.db = new Pool({
    host: "localhost",
    user: "postgres",
    password: "secretpassword",
    database: "test-highscors",
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Lägg till layout
app.use(expressLayouts);
app.set('layout', 'shared/layout');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(session({ secret: 'secretpassword' }))
app.use(cors())
app.use('/', indexRouter);
app.use("/search", searchRouter);
app.use("/games", gamesRouter);
app.use("/admin/games", adminRouter);
app.use("/admin/games/new", newSpelRouter);
app.use("/admin/score/new", newScoreRouter);

//här kan man välja hur uhr ska vara 
app.use('/api/games', gamesApiRouter)
app.use('/api/scores', scoresApiRouter)
app.use('/api/auth', authApiRouter);


//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;