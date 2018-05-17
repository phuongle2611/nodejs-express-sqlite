const sqlite3 = require('sqlite3').verbose();
var moment = require('moment');
var env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];

const database_link = config.database.link;
var fs = require('fs');

exports.get_last_60_data_db = function(tid,c_col,delta_t){
	return new Promise((resolve,reject)=>{
		if (fs.existsSync(database_link)) {
		    // Do something
			let Db = new sqlite3.Database(database_link, (err) => {
			  if (err) {
			    // console.log(err.message);
			  }else{
			  	// console.log('get_last_60_data_db Connected to the tzdm database.');
			  }
			});

			let sql = `SELECT *
						FROM data
						WHERE device = 0
						ORDER BY rowid DESC
						LIMIT 60
						`;
			Db.all(sql,[],(err,rows)=>{
				if (err){
					// console.log(err);
				}else{
					var data = [];
					rows.forEach((row)=>{
						if (typeof row !== 'undefined' && row){
							var time = parseInt(row.timestamp*1000)+parseInt(delta_t);
							if (typeof row[c_col] !== 'undefined' && row[c_col]){
								var singledata = {'timestamp':time,'value':parseFloat(row[c_col])};
							}else{
								var singledata = {'timestamp':time,'value':0};
							}
							data.push(singledata);
						}else{
							var singledata = {'timestamp':Date.now(),'value':0};
							data.push(singledata);
						}
					});
					resolve(data);
				}
			});

			// var data = [];
			// for (var i = 0; i < 60; i++) {
			// 	var singledata = {'timestamp':Date.now(),'value':0};
			// 	data.push(singledata);
			// }
			// resolve(data);

			Db.close((err) => {
			   if (err) {
			    // console.log(err.message);
			   }else{
			  	// console.log('get_last_60_data_db Close the database connection.');
			   }
			 });
		}else{
			var data = [];
			for (var i = 0; i < 60; i++) {
				var singledata = {'timestamp':Date.now(),'value':0};
				data.push(singledata);
			}
			resolve(data);
		}

	});
}

exports.lookup_db = function(name){
	return new Promise((resolve,reject)=>{
		try{
			if (fs.existsSync(database_link)) {
			    // Do something
				let Db = new sqlite3.Database(database_link, (err) => {
				  if (err) {
				    // console.log(err);
				    resolve(0);
				  }else{
				  	// console.log('lookup_db Connected to the tzdm database.');
				  }
				});

				let sql = `SELECT rowid
							FROM tags
							WHERE name = '`+name+`'
							`;

				Db.get(sql,(err,row)=>{
					// console.log(row);
					if (err){
						resolve(0);
					}else{
						if ( typeof row !== 'undefined' && row ){
						  //do stuff if query is defined and not null
						  resolve(row.rowid);
						}
						else{
							resolve(0);
						}
					}
				});

				Db.close((err) => {
				  if (err) {
				    // console.log(err.message);
				  }else{
				  	// console.log('lookup_db Close the database connection.');
				  }
				});
			}else{
				resolve(0);
			}
		}catch(err){
			// console.log(err);
		}
	});
}

exports.get_current_data_string_db = function(conversion_array,did,delta_t){
	return new Promise((resolve,reject)=>{
		if (fs.existsSync(database_link)) {
		    // Do something
		 	let Db = new sqlite3.Database(database_link, (err) => {
			  if (err) {
			    // console.error(err.message);
			    var data = [];
			    conversion_array.forEach(function(value){
		    		var singledata = {'tid':value.tid,'v':0,'st':moment().format()};
					data.push(singledata);
				});
				resolve(JSON.stringify(data));
			  }else{
			  	// console.log('get_current_data_string_db Connected to the tzdm database.');
			  }
			});

			// let sql = `SELECT *
			// 		FROM data
			// 		WHERE device = 0 AND
			// 		timestamp = (SELECT MAX(timestamp) FROM data)
			// 		`;
			if(did>100){
				var mydid=0;
			}else{
				var mydid=did;
			}
			let sql = `SELECT * FROM data WHERE device = ${mydid} ORDER BY rowid DESC LIMIT 2`;
			Db.all(sql,(err, rows)=>{
				let row = rows[1];
				if (err){
				}else{
					var data = [];
					conversion_array.forEach(function(value){
						if (typeof row !== 'undefined' && row){
							if (typeof row[value.c]!== 'undefined' && row[value.c]){
								var time = parseInt(row.timestamp*1000)+parseInt(delta_t);
								// console.log(time);
								var singledata = {'tid':value.tid,'v':parseFloat(row[value.c]),'ts':moment(time).format('MMMM Do YYYY, h:mm:ss a'), 'st':moment().format('MMMM Do YYYY, h:mm:ss a'), 'dt':'dval'};
							}else{
								var singledata = {'tid':value.tid,'v':0,'st':moment().format('MMMM Do YYYY, h:mm:ss a')};
							}
							data.push(singledata);
						}else{
							var singledata = {'tid':value.tid,'v':0,'st':moment().format('MMMM Do YYYY, h:mm:ss a')};
							data.push(singledata);
						}
					});
					resolve(JSON.stringify(data));
				}
			});

			Db.close((err) => {
			  if (err) {
			    // console.log(err.message);
			  }else{
			  	// console.log('get_current_data_string_db Close the database connection.');
			  }
			});
		}else{
			var data = [];
		    conversion_array.forEach(function(value){
	    		var singledata = {'tid':value.tid,'v':0,'st':moment().format('MMMM Do YYYY, h:mm:ss a')};
				data.push(singledata);
			});
			resolve(JSON.stringify(data));
		}
	});
}

exports.get_current_data_per_tid_with_limit_live_db = function (tid,c_col,delta_t){
	return new Promise((resolve,reject)=>{
		if (fs.existsSync(database_link)) {
		    // Do something
		    let Db = new sqlite3.Database(database_link, (err) => {
			  if (err) {
			    // console.error(err.message);
			  }else{
			  	// console.log('get_current_data_per_tid_with_limit_live_db Connected to the tzdm database.');
			  }
			});

			// let sql = `SELECT *
			// 		FROM data
			// 		WHERE device = 0 AND
			// 		timestamp = (SELECT MAX(timestamp) FROM data)
			// 		`;
			let sql = `SELECT * FROM data WHERE device = 0 ORDER BY rowid DESC LIMIT 2`;
			Db.all(sql,(err, rows)=>{
				let row = rows[1];
				if (err){
					// console.error(err.message);
				}else{
					if (typeof row !== 'undefined' && row){
						var time = parseInt(row.timestamp*1000)+parseInt(delta_t);
						if (typeof row[c_col] !== 'undefined' && row[c_col]){
							var data = [time,parseFloat(row[c_col])];
						}else{
							var data = [time,0];
						}
						resolve(JSON.stringify(data));
					}else{
						var data = [Date.now(),0];
						resolve(JSON.stringify(data));
					}
				}
			});
			
			Db.close((err) => {
			  if (err) {
			    // console.log(err.message);
			  }else{
			  	// console.log('get_current_data_per_tid_with_limit_live_db Close the database connection.');
			  }
			});
		}else{
			var data = [Date.now(),0];
			// console.log('no data');
			resolve(JSON.stringify(data));
		}
	});
}

exports.get_tagids_from_data = function(deviceid){
	return new Promise((resolve,reject)=>{
		if (fs.existsSync(database_link)) {
			let Db = new sqlite3.Database(database_link, (err) => {
			  if (err) {
			    // console.error(err.message);
			  }else{
			  	// console.log('get_current_data_per_tid_with_limit_live_db Connected to the tzdm database.');
			  }
			});
			
			var lastrow = 0;


			// let sql = `SELECT * FROM data WHERE device = ${deviceid} AND timestamp = (SELECT MAX(timestamp) FROM data)`;
			// let sql = `SELECT * FROM data WHERE device = ${deviceid} AND rowid = ${lastrow}`;
			let sql = `SELECT * FROM data WHERE device = ${deviceid} ORDER BY rowid DESC LIMIT 2`;
			Db.all(sql,(err,rows)=>{
				// console.log('row0 '+rows[0].timestamp);
				// console.log('row1 '+rows[1].timestamp);
				// console.log(rows[2].timestamp);
				let row = rows[1];
				if (err){
					// console.error(err.message);
				}else{
					if (typeof row !== 'undefined' && row){
						var objkeys = Object.keys(row).length;
						var data = [];
						for (var i = 0; i < objkeys; i++) {
							var c_col = 'c'+i;
							if (typeof row[c_col]!== 'undefined' && row[c_col]!==null){
							// if (row[c_col]!=null){
								data.push(i);
							}else{
								// console.log(i+':'+row[c_col]);
							}
						}
						resolve(data);
					}else{
						// console.log(row);
						resolve([0]);

					}
				}
			});
			Db.close((err) => {
			  if (err) {
			    // console.log(err.message);
			  }else{
			  	// console.log('get_current_data_per_tid_with_limit_live_db Close the database connection.');
			  }
			});
		}else{
			resolve([0]);
		}
	});
}

exports.get_all_tags_from_tags = function(tagid_array){
	return new Promise((resolve,reject)=>{
		if (fs.existsSync(database_link)) {
			let Db = new sqlite3.Database(database_link, (err) => {
			  if (err) {
			    // console.error(err.message);
			  }else{
			  	// console.log('get_current_data_per_tid_with_limit_live_db Connected to the tzdm database.');
			  }
			});

			let sql = `SELECT rowid,name FROM tags`;

			Db.all(sql,[],(err,rows)=>{
				if (err){
					// console.log(err);
				}else{
					var data = [];
					for (var i = 0; i < rows.length; i++) {
						var row = rows[i];
						var singledata = {'id':row.rowid,'did':'0','tid':row.rowid,'label':row.name,'factor':'1','order':row.rowid,'v':'loading...','ts':'loading...','unit':'','descr':row.rowid};
						data.push(singledata);
					}
					// var singledata = [{'id':1,'did':'0','tid':'0','label':'','factor':'1','order':'1','v':'loading...','ts':'loading...','unit':'','descr':''}];
					resolve(data);
				}
			});

			Db.close((err) => {
			  if (err) {
			    // console.log(err.message);
			  }else{
			  	// console.log('get_current_data_per_tid_with_limit_live_db Close the database connection.');
			  }
			});
		}else{
			var singledata = [{'id':1,'did':'0','tid':'0','label':'','factor':'1','order':'1','v':'loading...','ts':'loading...','unit':'','descr':''}];
			resolve(singledata);
		}
	});
}

exports.get_tags_by_id_from_tags =  function(tagid_array,deviceid){
	return new Promise(async (resolve,reject)=>{
		if (fs.existsSync(database_link)) {
			var data = [];
			for (var i = 0; i < tagid_array.length; i++) {
				var singledata = await get_single_tag_from_tag(tagid_array[i],deviceid);
				data.push(singledata);
			}
			resolve(data);
		}else{
			var singledata = [{'id':1,'did':'0','tid':'0','label':'','factor':'1','order':'1','v':'loading...','ts':'loading...','unit':'','descr':''}];
			resolve(singledata);
		}
	});
}

function get_single_tag_from_tag(tagid,deviceid){
	return new Promise((resolve,reject)=>{
		if (fs.existsSync(database_link)){
			let Db = new sqlite3.Database(database_link, (err) => {
				if (err) {
				    // console.error(err.message);
				}else{
					// console.log('get_current_data_per_tid_with_limit_live_db Connected to the tzdm database.');
				}
			});
			let sql = `SELECT rowid,name FROM tags WHERE rowid = ${tagid}`;
			Db.get(sql,(err,row)=>{
				if (err){
				}else{
					if (typeof row !=='undefined' && row){
						var singledata = {'id':row.rowid,'did':deviceid,'tid':row.rowid,'label':row.name,'factor':'1','order':row.rowid,'v':'loading...','ts':'loading...','unit':'','descr':row.rowid};
						// console.log(singledata);
						// data.push(singledata);
						resolve(singledata);
					}else{
						var singledata = {'id':0,'did':'0','tid':0,'label':'','factor':'1','order':0,'v':'loading...','ts':'loading...','unit':'','descr':''};
						resolve(singledata);
					}
				}
			});

			Db.close((err) => {
			  if (err) {
			    // console.log(err.message);
			  }else{
			  	// console.log('get_current_data_per_tid_with_limit_live_db Close the database connection.');
			  }
			});
		}else{
			var singledata = {'id':0,'did':'0','tid':0,'label':'','factor':'1','order':0,'v':'loading...','ts':'loading...','unit':'','descr':''};
			resolve(singledata);
		}
	});
}
