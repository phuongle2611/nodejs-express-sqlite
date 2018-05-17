const { exec } = require('child_process');
var fs = require('fs');
var env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];
var delta_t_path = config.delta_t_path;
exports.post_time = function (req,res){
	var time_string = req.body.time;
	var browser_t = Date.parse(time_string);
	// exec(`date -s "${time_string}"`,(error,stdout,stderr)=>{
	exec(`date +%s`,(error,stdout,stderr)=>{
		if (error) {
		    console.error(`exec error: ${error}`);
		    return;
		}
		var streambox_t = parseInt(stdout)*1000;
		var delta_t = parseInt(browser_t)-parseInt(streambox_t);
		var time_obj = {browser_t:browser_t,streambox_t:streambox_t,delta_t:delta_t};
		var time_str = JSON.stringify(time_obj);
		fs.writeFile(delta_t_path,time_str,(err)=>{
			if (err){
				console.log(err);
			}else{
				console.log('file is saved');
			}
		});
	});
	res.send(time_string);
	
}
