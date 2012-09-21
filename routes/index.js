
/*
 * GET home page.
 */
var client;
exports.setOption = function(cli){
	client = cli;
}

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};
exports.userData = function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  	client.query('select * from userInfo where id=2', function(error, result, fields){
		if(error)
		{
			console.log('fail error');
		}else{			
			console.log(result);			
		}
	});
	res.end('<h1>hihihi name = '+req.param('name')+req.param('id')+' </h1>');		

};