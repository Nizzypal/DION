//server
var express = require ('express');

//libarary
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Model Requires
var CareSeeker = require('./models/care_seeker.js');
var CareGiver = require('./models/care_giver.js');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Variables
var app = express();
var path = require('path');

//For stylus
// function compile(str, path){
// 	return stylus(str).set('filename', path);
// };

//app.set('views', __dirname + '/app/views');
//app.set('view engine', 'jade');
//app.use(logger('dev'));

//Routes
app.use(express.static(__dirname + '/'));
app.use(express.static('./app'));
app.use('/', express.static(path.join(__dirname, 'bower_components')));
// app.get('/partials/:partialPath', function(req, res){
// 	res.render('partials/' + req.params.partialPath);
// });

app.use(bodyParser.json());
//app.use(bodyParser.raw());
//app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: false}));
 

//middlware
// app.use(stylus.middleware(
// 	{
// 		src: __dirname + '/public',
// 		compile: compile
// 	}
// ));




if (env === 'development'){
	mongoose.connect('mongodb://localhost/DION');
	console.log('Local DB');
}
else {
	mongoose.connect('mongodb://jon:nazpal6180@ds047085.mongolab.com:47085/dion');
		console.log('Remote DB');
}
//mongoose.connect('mongodb://jon:nazpal6180@ds047085.mongolab.com:47085/dion');

function encrypt(str){
    var encryptedAES = CryptoJS.AES.encrypt("Message", "Secret Passphse");

    var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");

    decrypted.toString(CryptoJS.enc.Utf8);
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


//CRUD Operations
app.post('/register', function(req, res) {
	var user = req.body;

	var searchUser = {
		email: user.email
	};

	var newUser = {};

	CareSeeker.findOne(searchUser, function(err, user) {
		if (user) {
		  res.status(401).send({
		    message: 'Email already used by another account'
		  });
		  return;
		} else {
			//Register Save
			newUser.save(function(err) {
				if (err) {
			      res.status(401).send({
			        message: 'problem with database encountered'
			      });
			      return;
			    }
			    res.status(200).send();
			    return;
			});
		}
	});


	//Type sepcific Info
	if (user.type == "caregiver"){
			newUser = new CareGiver({
			firstName: user.firstName,
			middleName: user.middleName,
			lastName: user.lastName,
			email: user.email,
			password: user.password,
			city: user.city,
			agreeTerms: user.agreeTerms,
		})
	}
	else {
			newUser = new CareSeeker({
			city: req.body.city,
			agreeTerms: req.body.agreeTerms,
			firstName: req.body.firstName,
			middleName: req.body.middleName,
			//lastName: user.lastName,
			email: req.body.email,
			password: req.body.password,
		})
	}

			// //Register Save
			// newUser.save(function(err) {
			// 	if (err) {
			//       res.status(401).send({
			//         message: 'problem with database encountered'
			//       });
			//       return;
			//     }
			//     res.status(200).send();
			//     return;
			// });	

})


// app.get('*', function (req, res) {
// 	res.render('index', {
// 		mongoMessage: mongoMessage
// 	});
// });

//var port = 3030;
var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '... ');