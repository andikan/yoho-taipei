
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

store = new express.session.MemoryStore; /* session store */

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon(__dirname + '/public/images/favicon.png'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({
    secret: 'yoho-taipei',
    store: store,
    key: 'sid',
    cookie: {
      maxAge: 1000*60*60
    }
  }));
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.set('port', process.env.PORT || 8888);
  app.use(express.errorHandler());
});

app.configure('production', function(){
  app.set('port', process.env.PORT || 5000);
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/today', routes.today);

/* mrt related */
app.get('/search_mrt', routes.search_mrt);
app.get('/mrt_spot/:number', routes.mrt_spot);
app.get('/spot/:id', routes.spot);

app.get('/test', routes.test);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
