var http = require('http');
var fs = require('fs');
var settings = require('./settings.js');
//シリアルの初期化設定など

var Serialport = require("serialport").SerialPort;
//シリアルポートの設定はsettings.jsにて設定可能
var sp = new Serialport(settings.serialport,{
	baudrate: settings.serialbaud,
});


var server = http.createServer();
server.on('request', getJs);
console.log('Server running ...');
 
function getJs(req, res) {
    var url = req.url;
console.log(url);
    if ('/' == url) {
        fs.readFile('./index.html', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ('/jquery.js' == url) {
        fs.readFile('./jquery.js', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        });
    }
    
    
    //画像はバイナリで送る感じ
    else if ('/red_on.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./red_on.jpg', 'binary' ),'binary');
        
    }else if ('/red_off.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./red_off.jpg', 'binary' ),'binary');
        
    }else if ('/blue_on.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./blue_on.jpg', 'binary' ),'binary');
       
    }else if ('/blue_off.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./blue_off.jpg', 'binary' ),'binary');
        
    }else if ('/green_on.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./green_on.jpg', 'binary' ),'binary');
       
    }else if ('/green_off.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./green_off.jpg', 'binary' ),'binary');
        
    }else if ('/parple_on.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./parple_on.jpg', 'binary' ),'binary');
       
    }else if ('/parple_off.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./parple_off.jpg', 'binary' ),'binary');
        
    }else if ('/L_rotate.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./L_rotate.jpg', 'binary' ),'binary');
        
    }else if ('/R_rotate.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./R_rotate.jpg', 'binary' ),'binary');
        
    }else if ('/L_rotate_off.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./L_rotate_off.jpg', 'binary' ),'binary');
        
    }else if ('/R_rotate_off.jpg' == url) {
        
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(fs.readFileSync('./R_rotate_off.jpg', 'binary' ),'binary');
        
    }
}

//下はsettings.jsでポート変更可能
server.listen(settings.port);
 
 //ここまでがサーバー起動
 
var socket = require('socket.io').listen(server);

sp.on('open',function(){
	console.log('open');
});

socket.on("connection", function(client){
	

	client.on('sendmes',function(msg){
		sp.write(msg,function(err,results){
		console.log(msg);
		});
	});	



});

