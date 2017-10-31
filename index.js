const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000))

app.use('/css', express.static('css'));
app.use('/images', express.static('images'))
app.use('/fonts', express.static('fonts'));
app.use('/js', express.static('js'));


//HOST ROUTE
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html');
});

app.get('/about', function(req, res) {
	res.sendFile(__dirname + '/about.html');
});

app.get('/services', function(req, res) {
	res.sendFile(__dirname + '/services.html');
});

app.get('/store', function(req, res) {
	res.sendFile(__dirname + '/store.html');
});

app.listen(app.get('port'), function() {
	console.log("running: port");
}) 