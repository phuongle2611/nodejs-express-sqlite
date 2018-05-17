var env = process.env.NODE_ENV||'development';
 // console.log(env);
const config = require('./config')[env];

var express = require("express");
var dataroute = require('./routes/dataRoute');
var mobileroute = require('./routes/mobileRoute');
var timeroute = require('./routes/timeRoute');
var app = express();
app.set('views', './views');
 app.set('view engine','pug');
var path = __dirname + '/views/';
app.get("/maintenance",function(req,res){
  res.sendFile(path + "gauge3.html");
});
app.get('/mobileviewtest',(req,res)=>{
	res.sendFile(path + "mobile.html");
});
app.get('/',(req,res)=>{
	res.redirect('/mobile/0');
});
app.use('/mobile',mobileroute);
app.use(express.static('public'));
app.use('/getv2data',dataroute);

app.use('/settime',timeroute);











app.listen(config.server.port,function(){
  // console.log("Live at Port "+config.server.port);

 
});