//Open Sqlite3 Connection
// var Db = require('../models/db');

let Db = require('../models/db2');

exports.index = async function(req, res) {
	try{
		var deviceid = req.params.id;
		var tagid_array = await Db.get_tagids_from_data(deviceid);
		var aliasjson_array = await Db.get_tags_by_id_from_tags(tagid_array,deviceid);
		res.render('mobile', {
	    	title: 'Mobile View',
	    	systemid:'0',
	    	systemtitle:'Test System',
	    	website:'',
	    	timezone:'Pacific/Auckland',
	    	aliasjson:aliasjson_array
	    });
	}catch(err){
		console.log(err);
	}
};


