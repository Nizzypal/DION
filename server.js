var express = require ('express');
//libarary
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


//For stylus
function compile(str, path){
	return stylus(str).set('filename', path);
};

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: false}));
 

//middlware
app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
));


//Routes
app.use(express.static(__dirname + '/public'));
app.get('/partials/:partialPath', function(req, res){
	res.render('partials/' + req.params.partialPath);
});

if (env === 'development'){
	mongoose.connect('mongodb://localhost/DION');
}
else {
mongoose.connect('mongodb://jon:nazpal6180@ds047085.mongolab.com:47085/dion');
}

//mongoDB
console.log('mongoose-' + mongoose.version);
//mongoose.connect('mongodb://localhost/DION');
//mongoose.connect('mongodb://jon:nazpal6180@ds047085.mongolab.com:47085/dion');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
	console.log('DION db opened');
});

//Schemas
var messageSchema = mongoose.Schema({
	message: String
});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
 	mongoMessage = messageDoc.message;
});


app.get('*', function (req, res) {
	res.render('index', {
		mongoMessage: mongoMessage
	});
});

//var port = 3030;
var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '... ');