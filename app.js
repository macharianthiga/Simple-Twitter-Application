const express     = require('express'),
      morgan      = require('morgan'),
      bodyParser  = require('body-parser'),
      mongoose    =  require('mongoose'),
      hbs         = require('hbs'),
      mainRoutes  = require('./routes/main'),
      expressHbs  = require('express-handlebars'),
      app         = express();




app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine',  'hbs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(mainRoutes);



app.listen(3030, (err) => {
  if (err) console.log(err);
  console.log('Twitter is running on port 3030');
});
