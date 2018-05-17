//Open Sqlite3 Connection
let Db = require('../models/db2');
var fs = require('fs');
var env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];
var delta_t_path = config.delta_t_path;

//Handle get_current_data_string_per_tid
exports.get_current_data_string = async function(req,res){
	try{
		let did = req.query.did;
		let tid = req.query.tid;
		let tz = req.query.tz;
		let conversion_array = await convert2(tid);
		// console.log(delta_t_path);
		let time_obj = await delta_f(delta_t_path);
		// console.log(delta_t);
		let data = await Db.get_current_data_string_db(conversion_array,did,time_obj.delta_t);
		res.send(data);
	}catch (err){
		console.log(err);
	}
};

//Handle get_current_data_per_tid_with_limit_live
exports.get_current_data_per_tid_with_limit_live = async function(req,res){
	try{
		let did = req.query.did;
		let tid = req.query.tid;
		let tz = req.query.tz;
		let limit = req.query.limit;
		let converted = await convert(tid);
		let time_obj = await delta_f(delta_t_path);
		let data = await Db.get_current_data_per_tid_with_limit_live_db(converted.tid,converted.c,time_obj.delta_t);
		res.send(data);
	}catch(err){
		console.log(err);
	}
};

//Handle get_raw_data_last_60_test
exports.get_raw_data_last_60_test = async function (req,res){
	try{
		let did = req.query.did;
		let tid = req.query.tid;
		let tz = req.query.tz;
		let limit = req.query.limit;
		let minimumdateexpected = req.query.minimumdateexpected;
		let maxhoursrollback = req.query.maxhoursrollback;
		let converted = await convert(tid);
		let time_obj = await delta_f(delta_t_path);
		//async await style, we need to put async before the top function
		let Data = await Db.get_last_60_data_db(converted.tid,converted.c,time_obj.delta_t);
		res.send(JSON.stringify(Data));
	}catch(err){
		console.log(err);
	}
}

/*get delta t value from local path /tmp/delta_t.txt*/
function delta_f(delta_t_path){
	return new Promise((resolve,reject)=>{
		if (fs.existsSync(delta_t_path)){
			fs.readFile(delta_t_path,"utf8",(err,string)=>{
				if (err){
					var time_obj = {browser_t:0,streambox_t:0,delta_t:0};
					resolve(time_obj);
				};
				// console.log('delta f '+string);
				if (typeof string !=='undefined'){
					var value = JSON.parse(string);
					resolve(value);
				}else{
					var time_obj = {browser_t:0,streambox_t:0,delta_t:0};
					resolve(time_obj);
				}
				
			});
		}else{
			var time_obj = {browser_t:0,streambox_t:0,delta_t:0};
			resolve(time_obj);
		}
	});
}

function convert2(tids){
	return new Promise(async (resolve,reject)=>{
		try{
			let tid_array = tids.split(",");
			const conversion_array = [];
			for (var i = 0; i < tid_array.length; i++) {
				switch (tid_array[i]){
				case '138657'://Suction_T c4
					var colnumberPromise =await Db.lookup_db('Suction_T');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138776'://Evap_T c7
					var colnumberPromise =await Db.lookup_db('Evap_T');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138777'://Cond_T c8
					var colnumberPromise =await Db.lookup_db('Cond_T');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138778'://SSH c10
					var colnumberPromise =await Db.lookup_db('SSH');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138779'://DSH c11
					var colnumberPromise =await Db.lookup_db('DSH');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138652'://Discharge_T c5
					var colnumberPromise =await Db.lookup_db('Discharge_T');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138781'://Suction_p c13
					var colnumberPromise =await Db.lookup_db('Discharge_p');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138782'://Discharge_p c14
					var colnumberPromise =await Db.lookup_db('Evap_T');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138841'://ID_Fan_out c80
					var colnumberPromise =await Db.lookup_db('ID_Fan_out');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138840'://OD_Fan_out c79
					var colnumberPromise =await Db.lookup_db('OD_Fan_out');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138775'://De-Ice_T c6
					var colnumberPromise =await Db.lookup_db('De-Ice_T');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138844'://Capacity_out c83
					var colnumberPromise =await Db.lookup_db('Capacity_out');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138794'://IUC_EXV1 c26
					var colnumberPromise =await Db.lookup_db('IUC_EXV1');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				case '138795'://IUC_EXV2 c27
					var colnumberPromise =await Db.lookup_db('IUC_EXV2');
					var singledata = {'tid':tid_array[i],'c':'c'+colnumberPromise};
					conversion_array.push(singledata);
					break;
				default:
					var singledata = {'tid':tid_array[i],'c':'c'+tid_array[i]};
					conversion_array.push(singledata);
					break;
				}
			}
			resolve(conversion_array);
		}catch(error){
			console.log(error);
		}
	});
}


function convert(tid){
	return new Promise(async (resolve,reject)=>{
		try{
			switch (tid){
				case '138869': //Ts_Room_t c110
					var colnumberPromise = await Db.lookup_db('Ambient_T'); //Ambient_T Ts_Room_t
					var c_col = 'c'+colnumberPromise;
					var result = {'tid':tid,'c':c_col};
					// console.log(result);
					resolve(result);
				break;
				case '138844'://Capacity_out c83
					var colnumberPromise = await Db.lookup_db('Capacity_out');
					var c_col = 'c'+colnumberPromise;
					var result = {'tid':tid,'c':c_col};
					// console.log(result);
					resolve({'tid':tid,'c':c_col});
				break;
				case '138776'://Evap_T c7
					var colnumberPromise = await Db.lookup_db('Evap_T');
					var c_col = 'c'+colnumberPromise;
					var result = {'tid':tid,'c':c_col};
					resolve({'tid':tid,'c':c_col});
				break;
				case '138777'://Cond_T c8
					var colnumberPromise = await Db.lookup_db('Cond_T');
					var c_col = 'c'+colnumberPromise;
					var result = {'tid':tid,'c':c_col};
					resolve({'tid':tid,'c':c_col});
				break;
				case '138778'://SSH c10
					var colnumberPromise = await Db.lookup_db('SSH');
					var c_col = 'c'+colnumberPromise;
					var result = {'tid':tid,'c':c_col};
					resolve({'tid':tid,'c':c_col});
				break;
				case '138779'://DSH c11
					var colnumberPromise = await Db.lookup_db('DSH');
					var c_col = 'c'+colnumberPromise;
					var result = {'tid':tid,'c':c_col};
					resolve({'tid':tid,'c':c_col});
				break;
			}
		}catch(error){
			console.log(error);
		}
	});
}













