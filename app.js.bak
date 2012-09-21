
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
var mysql = require('mysql');
var url = require('url');
//var socketio = require('socket.io');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

var client = mysql.createClient({
    user: 'root',
    password: 'qwer',
    database: 'userData'
    
});
routes.setOption(client);
// Routes
app.get('/', routes.index);
app.get('/userData/:id/:name', routes.userData);
app.get('/data/:id', function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	//res.writeHead(200, {'Content-Type':'text/xml'});
	client.query('select * from userInfo where id='+req.param('id'), function(error, result, fields){
		if(error)
		{
			console.log('fail');
			res.end('<h1>fail</h1>');	
		}else{
			//var query = url.parse(result, true).query; 
			console.log(result);
			//console.log(fields);
			//res.write('<h1>'+req.params.id+' : '+result+' </h1>');
			//res.write('<h1> ddd </h1>');
			result.forEach(function(item, index){
				var strTemp = '';
				/*
				strTemp += '<h1> id : '+item.id+' </h1>\n';
				strTemp += '<h1> phoneNum : '+item.phoneNum+' </h1>\n';
				strTemp += '<h1> phoneModel : '+item.phoneModel+' </h1>\n';
				strTemp += '<h1> rankingScore : '+item.rankingScore+' </h1>\n';
				strTemp += '<h1> regData : '+item.regData+' </h1>\n';
				*/				
				strTemp += '<?xml version="1.0" encoding="UTF-8"?>\n';
				strTemp += '<userInfo>\n';
				strTemp += '<users cnt="1">\n';
				strTemp += '<data id="0" name="INTRO_PROLOGUE1_1" path="cartoon/intro/prologue1_1.png"></data>\n';				
				strTemp += '</users>\n';
				strTemp += '</userInfo>\n';
				res.end(strTemp);	
			});
			
			//res.end();
		}
	});
	
});

app.listen(50105);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
